import React, { Component } from "react";
import "../Styles/Die.css";

class Die extends Component {
  static defaultProps = {
    1: "die fas fa-dice-one",
    2: "die fas fa-dice-two",
    3: "die fas fa-dice-three",
    4: "die fas fa-dice-four",
    5: "die fas fa-dice-five",
    6: "die fas fa-dice-six",
  };
  render() {
    return <i className={this.props[this.props.roll]}></i>;
  }
}

export default Die;
