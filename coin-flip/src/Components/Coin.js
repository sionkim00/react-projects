import React, { Component } from "react";

class Coin extends Component {
  render() {
    return <div className="Coin">{this.props.coinSide}</div>;
  }
}

export default Coin;
