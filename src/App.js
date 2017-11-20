import React, { Component } from "react";
import "./App.css";
import Input from "./Input";
import serializeForm from "form-serialize";
import TimeDisplay from "./TimeDisplay";
import { validateTime } from "./utils";
import FieldValidation from "./FieldValidation";
import FormValidation from "./FormValidation";

class App extends Component {
  state = {
    errorMessage: null
  };
  handleSubmit = (e, fieldName) => {
    e.preventDefault();
    console.log(e.target[fieldName].value);
  };
  render() {
    return (
      <div className="App">
        <FormValidation>
          {({ validationErrors }) => {
            <FieldValidation>
              {({ isValid }) => console.log(validationErrors, "looook")}
            </FieldValidation>;
            <div>{validationErrors}</div>;
          }}
        </FormValidation>
      </div>
    );
  }
}

export default App;
