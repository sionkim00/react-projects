import React, { Component } from "react";
import Die from "./Die";
import "../Styles/RollDice.css";

class RollDice extends Component {
  state = {
    roll1: 1,
    roll2: 2,
    rolling: false,
  };
  rollDice = (e) => {
    const newRoll1 = Math.floor(Math.random() * 6) + 1;
    const newRoll2 = Math.floor(Math.random() * 6) + 1;
    this.setState({ roll1: newRoll1, roll2: newRoll2 });
    this.setState({ rolling: true });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-dices">
          <Die roll={this.state.roll1} />
          <Die roll={this.state.roll2} />
        </div>
        <button
          className="RollDice-rollBtn"
          onClick={this.rollDice}
          disabled={this.state.rolling}
        >
          {this.state.rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
