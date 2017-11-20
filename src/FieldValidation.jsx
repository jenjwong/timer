import React, { Component } from "react";

export default class FieldValidation extends Component {
  state = {
    formValidationErrors: ["all the erros"]
  };

  isValid = () => {
    this.hasStartBeforeEndTime();
  };

  hasStartBeforeEndTime = (startTime, endTime) => {
    if (startTime >= endTime) {
      this.setState({
        formValidationErrors: [
          ...this.state.formValidationErrors,
          "start time should be greater than end time"
        ]
      });
    }
    return startTime >= endTime;
  };

  render() {
    let contentMessage;
    if (this.state.formValidationErrors.length === 0) {
      contentMessage = null;
    } else if (this.state.formValidationErrors === 1) {
      contentMessage = "Please correct the following error:";
    } else {
      contentMessage = "Please correct the following errors:";
    }

    return <div>{this.props.children(this.state)} }</div>;
  }
}
