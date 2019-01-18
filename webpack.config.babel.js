import * as Path from "path";
import * as webpack from "webpack";

const { HotModuleReplacementPlugin } = webpack;
const { ModuleConcatenationPlugin } = webpack.optimize;

export default {
  entry: {
    main: "./main.js"
  },
  context: Path.resolve("./src"),
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: Path.resolve("./dist")
  },
  module: {
    rules: [{ test: /\.js/, use: "babel-loader" }]
  },
  plugins: [new HotModuleReplacementPlugin(), new ModuleConcatenationPlugin()],
  devServer: {
    contentBase: ".",
    inline: true,
    hot: true,
    port: 3000
  }
};
