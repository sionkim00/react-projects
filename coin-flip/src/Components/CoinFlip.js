import React, { Component } from "react";
import Coin from "./Coin";

class CoinFlip extends Component {
  state = {
    curSide: "",
    tailCount: 0,
    headCount: 0,
    totalCount: 0,
  };
  flipCoin = (e) => {
    const rand = Math.floor(Math.random() * 2);
    if (rand === 0) {
      this.setState({
        curSide: "head",
        headCount: this.state.headCount + 1,
        totalCount: this.state.totalCount + 1,
      });
    } else {
      this.setState({
        curSide: "tail",
        tailCount: this.state.tailCount + 1,
        totalCount: this.state.totalCount + 1,
      });
    }
  };
  render() {
    return (
      <div className="CoinFlip">
        <h1>Let's flip a coin!</h1>
        <Coin coinSide={this.state.curSide} />
        <button onClick={this.flipCoin}>Flip Me!</button>
        <p>
          Out of {this.state.totalCount} flips, there have been{" "}
          {this.state.headCount} heads and {this.state.tailCount} tails.
        </p>
      </div>
    );
  }
}

export default CoinFlip;
