import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import App from "./App";

let rootElement = (
  <BrowserRouter>
    <Switch>
      <App />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(rootElement, document.getElementById("root"));
