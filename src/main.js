import { html } from "./html-parser";
import { render } from "./renderer";

render(
  html`
    <h1 style="color:red;">Hello</h1>
  `,
  document.querySelector("#root")
);
