import React, { Component } from "react";
import NavBar from "../navigation/NavBar";
import { Wrapper } from "./Layout.styled";

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
