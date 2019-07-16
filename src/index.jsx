import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter, Switch } from "react-router-dom";

import App from "@/App";
import rootReducer from "@/reducers";

const store = createStore(rootReducer);

let rootElement = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <App />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(rootElement, document.getElementById("root"));
