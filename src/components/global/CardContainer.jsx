import React, { Component } from "react";
import { Heading, Wrapper } from "./CardContainer.styled";

class CardContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Heading>{this.props.heading}</Heading>
        <Wrapper>{this.props.children}</Wrapper>
      </React.Fragment>
    );
  }
}

export default CardContainer;
