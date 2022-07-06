import React, { Component } from "react";
import styled from "styled-components";

const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

class Image extends Component {
  render() {
    return (
      <React.Fragment>
        <Img alt={`${this.props.alt}`} src={`${this.props.src}`} />
      </React.Fragment>
    );
  }
}

export default Image;
