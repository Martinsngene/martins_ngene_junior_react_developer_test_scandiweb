import React, { Component } from "react";
import { Img } from "./Image.styled";

class Image extends Component {
  render() {
    return (
      <React.Fragment>
        <Img
          alt={`${this.props.alt}`}
          src={`${this.props.src}`}
          width={this.props.width}
          height={this.props.height}
        />
      </React.Fragment>
    );
  }
}

export default Image;
