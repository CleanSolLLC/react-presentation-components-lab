import React from "react";

class SimpleComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      mood: "happy",
    }
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        mood: prevState.mood === "happy" ? "sad" : "happy"
      }
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <button>{this.state.mood}</button>
      </div>
    )
  }
}

export default SimpleComponent;
