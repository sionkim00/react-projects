import React, { Component } from "react";
import { v4 as uuid } from "uuid";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), completed: false });
    this.setState({ task: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          id="task"
          name="task"
          onChange={this.handleChange}
          placeholder="New Todo"
          type="text"
          value={this.state.task}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
