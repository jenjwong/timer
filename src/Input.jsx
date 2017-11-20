// @flow

import React, { Component } from "react";

class Input extends Component {
  render() {
    let { val = "", name = "test", label = "", handleSubmit } = this.props;

    return (
      <form
        onSubmit={e => handleSubmit(e, name)}
        className="create-contact-form"
      >
        <input type="time" name={name} step="2" placeholder="hh:mm:ss" />
        <button>{label}</button>
      </form>
    );
  }
}

export default Input;
