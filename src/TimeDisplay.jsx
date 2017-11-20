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
          return { ...prevState, time: null };
        }
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.intervalRef);
  }

  render() {
    let display = <div className="TimeDisplay">{this.state.time}</div>;
    if (this.state.time === null) {
      display = <div className="timeFinished">Countdown Complete</div>;
    }
    return display;
  }
}

export default TimeDisplay;
