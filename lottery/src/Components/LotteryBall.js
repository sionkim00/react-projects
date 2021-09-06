import React, { Component } from "react";
import "../Styles/LotteryBall.css";

class LotteryBall extends Component {
  render() {
    return (
      <div className="LotteryBall">
        <p>{this.props.num}</p>
      </div>
    );
  }
}

export default LotteryBall;
