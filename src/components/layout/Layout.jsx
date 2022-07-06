import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "../navigation/NavBar";

const Wrapper = styled.main`
  max-width: 100%;
  padding-left: 101px;
  padding-right: 101px;
  background: #fff;
`;

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Wrapper>{this.props.children}</Wrapper>
      </React.Fragment>
    );
  }
}

export default Layout;
