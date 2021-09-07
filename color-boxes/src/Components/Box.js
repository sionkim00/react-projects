import React, { Component } from "react";
import "../Styles/Box.css";

class Box extends Component {
  render() {
    return (
      <div className="Box" style={{ backgroundColor: this.props.color }}></div>
    );
  }
}

export default Box;
