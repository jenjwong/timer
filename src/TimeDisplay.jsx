import React, { Component } from "react";

class TimeDisplay extends Component {
  state = {
    time: this.props.time
  };

  componentDidMount() {
    this.intervalRef = setInterval(() => {
      this.setState((prevState, props) => {
        if (prevState.time > 0) {
          return { ...prevState, time: prevState.time - 1 };
        } else {
          clearTimeout(this.intervalRef);
          return prevState;
        }
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.intervalRef);
  }

  render() {
    return <div className="TimeDisplay">{this.state.time}</div>;
  }
}

export default TimeDisplay;
