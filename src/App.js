import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  state = {
    number: 0
  };

  add = () => {
    this.setState({
      number:
        this.state.number === 10
          ? (this.state.number = 10)
          : this.state.number + 1
    });
  };

  rem = () => {
    this.setState({
      number:
        this.state.number === 0
          ? (this.state.number = 0)
          : this.state.number - 1
    });
  };

  render() {
    return (
      <div className="cont">
        <button className="soma" onClick={this.add}>
          +
        </button>
        <h1>{this.state.number}</h1>
        <button className="sub" onClick={this.rem}>
          -
        </button>
      </div>
    );
  }
}

export default App;
