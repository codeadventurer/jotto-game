import React, { Component } from "react";

import Congrats from "./Congrats";

export default class App extends Component {
  state = {
    success: false,
  };

  render() {
    return (
      <div className="App" data-test="component-app">
        <Congrats success={this.state.success} />
      </div>
    );
  }
}
