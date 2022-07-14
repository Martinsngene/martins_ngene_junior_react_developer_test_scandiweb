import React, { Component } from "react";
import { Btn, Label } from "./CustomButton.styled";

class CustomButton extends Component {
  render() {
    return (
      <Btn
        width={this.props.width}
        background={this.props.background}
        border={this.props.border}
        fontSize={this.props.fontSize}
        padding={this.props.padding}
      >
        <Label color={this.props.color}>{this.props.label}</Label>
      </Btn>
    );
  }
}

export default CustomButton;
