import React, { Component } from "react";
import Box from "./Box";
import "../Styles/ColorBoxes.css";

class ColorBoxes extends Component {
  static defaultProps = {
    colors: [
      "black",
      "silver",
      "gray",
      "maroon",
      "red",
      "purple",
      "fuchsia",
      "green",
      "lime",
      "olive",
      "yellow",
      "navy",
      "blue",
      "teal",
      "aqua",
      "aliceblue",
      "antiquewhite",
      "aqua",
      "aquamarine",
      "azure",
      "beige",
    ],
    boxNum: 18,
  };
  state = {
    colorData: Array.from({ length: this.props.boxNum }).map(
      () =>
        this.props.colors[Math.floor(Math.random() * this.props.colors.length)]
    ),
  };

  handleClick = (color, idx) => {
    let newColorData = [...this.state.colorData];
    let randColor;
    do {
      randColor =
        this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
    } while (randColor === color);
    newColorData[idx] = randColor;
    this.setState({ colorData: newColorData });
  };

  render() {
    return (
      <div className="ColorBoxes">
        {this.state.colorData.map((color, idx) => (
          <div onClick={() => this.handleClick(color, idx)}>
            <Box color={color} />
          </div>
        ))}
      </div>
    );
  }
}

export default ColorBoxes;
