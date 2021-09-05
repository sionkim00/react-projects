import React, { Component } from "react";

class Clicker extends Component {
  state = {
    num: 0,
  };
  generateRand = (e) => {
    const rand = Math.floor(Math.random() * 9) + 1;
    this.setState({ num: rand });
  };
  render() {
    return (
      <div className="Clicker">
        <h1>Number is {this.state.num}</h1>
        {this.state.num !== 7 ? (
          <button onClick={this.generateRand}>Random Number</button>
        ) : (
          <h2>You Win!</h2>
        )}
      </div>
    );
  }
}

export default Clicker;
