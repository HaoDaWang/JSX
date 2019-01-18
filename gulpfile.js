const { task, watch, series, parallel } = require("gulp");
const { spawn } = require("child_process");

function errorCatcher(err) {
  console.error(err);
}

function _spawn(done) {
  return (command, args, options) => {
    let child_process = spawn(command, args, options);

    child_process.on("error", err => {
      errorCatcher(err);
    });
    child_process.on("close", () => done());
  };
}

task("watch", done => {
  const watcher = watch(
    ["./src/**/*.js", "./webpack.config.babel.js"],
    series("exec")
  );

  watcher.on("error", err => {
    errorCatcher(err);
  });

  watcher.on("change", () => done());
});

task("webpack", done => {
  _spawn(done)("webpack", ["--config webpack.config.babel.js"], {
    stdio: "inherit"
  });
});

task(
  "exec",
  series("webpack", done => {
    // _spawn(done)("node", ["./dist/main.bundle.js"], { stdio: "inherit" });
    done();
  })
);

task("default", parallel("watch", "webpack"));
