import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px;
`;

const Heading = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 160%;
  color: #1d1f22;
`;

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
