import React, { Component } from "react";
import Image from "./Image";
import { Button, Container } from "./SlideImages.styled";

class SlideImages extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  onclick(type) {
    this.setState((prevState) => {
      if (
        this.state.count !== this.props.imagesArray.length - 1 &&
        type === "add"
      ) {
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
        width={this.props.containerWidth}
        height={this.props.containerHeight}
      >
        <Image
          src={this.props.imagesArray[this.state.count]}
          width={this.props.sliderImageWidth}
          height={this.props.sliderImageHeight}
          alt="sample"
        />
        {this.props.isSlider && (
          <React.Fragment>
            <Button
              right="56px"
              bottom="0px"
              onClick={this.onclick.bind(this, "sub")}
            >
              &gt;
            </Button>
            <Button
              right="0px"
              bottom="0px"
              onClick={this.onclick.bind(this, "add")}
            >
              &lt;
            </Button>
          </React.Fragment>
        )}
      </Container>
    );
  }
}

export default SlideImages;
