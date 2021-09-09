import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
    this.addBox = this.addBox.bind(this);
    this.deleteBox = this.deleteBox.bind(this);
  }
  addBox(box) {
    this.setState((st) => ({ boxes: [...st.boxes, box] }));
  }
  deleteBox(id) {
    this.setState({
      boxes: this.state.boxes.filter((box) => box.id !== id),
    });
  }
  render() {
    return (
      <div className="BoxList">
        {this.state.boxes.map((box) => (
          <Box {...box} key={box.id} deleteBox={this.deleteBox(box.id)} />
        ))}
        <NewBoxForm addBox={this.addBox} />
      </div>
    );
  }
}

export default BoxList;
