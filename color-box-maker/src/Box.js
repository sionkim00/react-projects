import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <div className="Box">
        <div
          style={{
            backgroundColor: this.props.backgroundColor,
            width: parseInt(this.props.width),
            height: parseInt(this.props.height),
          }}
        >
          <button onClick={this.props.deleteBox}>x</button>
        </div>
      </div>
    );
  }
}
export default Box;
