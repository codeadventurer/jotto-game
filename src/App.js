import React, { Component } from "react";
import "./App.css";

import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";

export default class App extends Component {
  state = {
    success: false,
  };

  render() {
    return (
      <div className="container" data-test="component-app">
        <h1>Jotto</h1>
        <Congrats success={this.state.success} />
        <GuessedWords
          guessedWords={[
            { guessedWord: "train", letterMatchCount: 3 },
            { guessedWord: "stick", letterMatchCount: 1 },
          ]}
        />
      </div>
    );
  }
}
