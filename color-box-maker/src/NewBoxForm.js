import React, { Component } from "react";
import { v4 as uuid } from "uuid";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      backgroundColor: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    const newBox = { ...this.state, id: uuid() };
    evt.preventDefault();
    this.props.addBox(newBox);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="width">Width </label>
        <input
          id="width"
          name="width"
          onChange={this.handleChange}
          value={this.state.width}
        />
        <label htmlFor="height">Height </label>
        <input
          id="height"
          name="height"
          onChange={this.handleChange}
          value={this.state.height}
        />
        <label htmlFor="backgroundColor">Color </label>
        <input
          id="backgroundColor"
          name="backgroundColor"
          onChange={this.handleChange}
          value={this.state.backgroundColor}
        />
        <button>Create Box!</button>
      </form>
    );
  }
}

export default NewBoxForm;
