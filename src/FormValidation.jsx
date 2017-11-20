import React, { Component } from "react";

import React, { Component } from "react";

export default class FieldValidation extends Component {
  state = {
    formValidationErrors: ["all the erros"]
  };

  render() {
    return <div>{this.props.children(this.state)} }</div>;
  }
}
