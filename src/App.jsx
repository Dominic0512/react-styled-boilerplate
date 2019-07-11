import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "containers/Home";

import { Normalize } from "styled-normalize";
import AppStyle from "./AppStyle";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Normalize />
        <AppStyle />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
