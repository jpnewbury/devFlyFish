import React, { Component } from "react";
class Sandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHuman: "false",
    };
  }
  render() {
    return (
      <p>
        {this.state.isHuman === "false" ? (
          <p>You are not human</p>
        ) : (
          <p>You are a human</p>
        )}
      </p>
    );
  }
}

export default Sandbox;
