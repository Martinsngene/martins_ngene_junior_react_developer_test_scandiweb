import React, { Component } from "react";
import { Container } from "./TrayItem.styled";

class TrayItem extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  onclick(type) {
    this.setState((prevState) => {
      if (type === "add") {
        return {
          count: prevState.count + 1,
        };
      }
      if (this.state.count > 0 && type === "sub") {
        return {
          count: prevState.count - 1,
        };
      }
    });
  }

  render() {
    return (
      <Container>
        Count: {this.state.count}
        <br />
        <div style={{ marginTop: "100px" }} />
        <input
          type="button"
          onClick={this.onclick.bind(this, "add")}
          value="Inc"
        />
        <input
          type="button"
          onClick={this.onclick.bind(this, "sub")}
          value="Dec"
        />
      </Container>
    );
  }
}

export default TrayItem;