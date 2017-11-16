// @flow

import React, { Component } from "react";

class Input extends Component {
  state = {
    isValid: false
  };

  render() {
    let { val = "", name = "test", label = "", handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="create-contact-form">
        <input type="text" name={name} placeholder="hh:mm:ss" />
        <button>{label}</button>
      </form>
    );
  }
}

export default Input;
