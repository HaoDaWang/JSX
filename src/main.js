import { html } from "./html-parser";
import { render } from "./renderer";

let node = html`
  <div>
    <h1>Hello</h1>
    <h2>ST</h2>
  </div>
`;

render(node, document.querySelector("#root"));
