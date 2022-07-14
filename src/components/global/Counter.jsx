import React, { Component } from "react";
import { Button, Container, Count } from "./Counter.styled";

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
        <Button
          type="button"
          onClick={this.onclick.bind(this, "add")}
          value="+"
        />
        <Count>{this.state.count}</Count>
        <Button
          type="button"
          onClick={this.onclick.bind(this, "sub")}
          value="-"
        />
      </Container>
    );
  }
}

export default TrayItem;
