import React, { Component } from "react";
import LotteryBall from "./LotteryBall";
import "../Styles/Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxNum: 40,
  };
  state = {
    nums: new Array(this.props.numBalls).fill(0),
  };
  generateNums = (e) => {
    let newNums = [];
    for (let i = 0; i < this.props.numBalls; i++) {
      newNums.push(Math.floor(Math.random() * 40) + 1);
    }
    this.setState({ nums: newNums });
  };

  render() {
    return (
      <div className="Lottery">
        <h1>{this.props.title}</h1>
        <div className="Lottery-balls">
          {this.state.nums.map((num) => (
            <LotteryBall num={num} />
          ))}
        </div>
        <button className="Lottery-generateBtn" onClick={this.generateNums}>
          Generate
        </button>
      </div>
    );
  }
}

export default Lottery;
