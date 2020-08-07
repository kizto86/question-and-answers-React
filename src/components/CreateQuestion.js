import React, { Component } from "react";
import axios from "axios";

export default class CreateQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      title: "",
      description: "",
    };
  }

  onChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  /*onChange = (e) => {
    this.setState({ [e.target.title]: e.target.value });
    this.setState({ [e.target.description]: e.target.value });
  };*/

  handleOnSubmit = (e) => {
    e.preventDefault();

    const question = {
      name: this.state.name,
      title: this.state.title,
      description: this.state.description,
    };
    axios
      .post("http://localhost:3002/questions", question)
      .then((res) => console.log(res.data));
    window.location = "/";
  };

  render() {
    return (
      <div>
        <h3>Create new question</h3>
        <form onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Name"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              required
              placeholder="Title"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              id="description"
              rows="5"
              cols="5"
              required
              placeholder="Description"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create question"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
