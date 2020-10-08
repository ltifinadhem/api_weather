import React from "react";

class Time extends React.Component {
  state = {
    curTime: new Date().toLocaleString()
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString()
      });
    }, 1000);
  }
  render() {
    return (
      <>
        <p>Current Time : {this.state.curTime}</p>
      </>
    );
  }
}

export default Time;
