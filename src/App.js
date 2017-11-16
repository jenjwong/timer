import React, { Component } from "react";
import "./App.css";
import Input from "./Input";
import serializeForm from "form-serialize";
import TimeDisplay from "./TimeDisplay";

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.setState(serializeForm(e.target, { hash: true }));
  };
  render() {
    return (
      <div className="App">
        <Input
          label="Start Time"
          handleSubmit={this.handleSubmit}
          name="startTime"
        />
        <Input
          label="End Time"
          handleSubmit={this.handleSubmit}
          name="endTime"
        />
        <TimeDisplay time="2" />
      </div>
    );
  }
}

export default App;
