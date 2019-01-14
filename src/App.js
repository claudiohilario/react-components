import React, { Component } from "react";
import Tooltip from "./components/Tooltip";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Components Test</h1>
        <h2>Tooltip</h2>
        <Tooltip message={"Olá"} position="right">
          Valor
        </Tooltip>
      </div>
    );
  }
}

export default App;
