import React, { Component } from "react";
import { Button, Container, Count } from "./Counter.styled";

class Counter extends Component {
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
      <Container
        width={this.props.counterContainerWidth}
        height={this.props.counterContainerHeight}
      >
        <Button
          width={this.props.counterBtnWidth}
          height={this.props.counterBtnHeight}
          fontSize={this.props.counterBtnFont}
          type="button"
          onClick={this.onclick.bind(this, "add")}
          value="+"
        />
        <Count fontSize={this.props.counterFont}>{this.state.count}</Count>
        <Button
          width={this.props.counterBtnWidth}
          height={this.props.counterBtnHeight}
          fontSize={this.props.counterBtnFont}
          type="button"
          onClick={this.onclick.bind(this, "sub")}
          value="-"
        />
      </Container>
    );
  }
}

export default Counter;
