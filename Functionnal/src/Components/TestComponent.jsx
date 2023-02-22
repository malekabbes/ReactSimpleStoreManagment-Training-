import React, { Component, useState } from "react";
// !ccc
class TestComponent extends Component {
  constructor(props) {
    super();
  }

  state = {
    counter: 0,
  };
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              ...prevState,
              counter: prevState.counter + 1,
            }))
          }
        ></button>
      </div>
    );
  }
}

export default TestComponent;
