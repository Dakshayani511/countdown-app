import React, { Component } from "react";
import Countdown from "./components/countdown";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">COUNT-DOWN</div>
        <div className="Timers">
          <Countdown />
        </div>
      </div>
    );
  }
}

export default App;