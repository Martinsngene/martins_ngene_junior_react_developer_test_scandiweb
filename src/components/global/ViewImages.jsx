import React, { Component } from "react";
import Image from "./Image";
import { Button, Item1, Item2, Wrapper } from "./ViewImages.styled";

class ViewImages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: 0,
    };

    // Binding this keyword
    this.updateState = this.updateState.bind(this);
  }

  updateState(item) {
    this.setState({ url: item.id });
  }

  render() {
    return (
      <Wrapper>
        <Item1>
          {this.props.displayImageToggler.map((item) => {
            return (
              <Button key={item.id} onClick={() => this.updateState(item)}>
                <Image
                  alt="sample select"
                  src={item.img}
                  width={79}
                  height={80}
                />
              </Button>
            );
          })}
        </Item1>
        <Item2>
          <Image
            alt="sample select"
            src={this.props.displayImage[this.state.url]}
            width={610}
            height={511}
          />
        </Item2>
      </Wrapper>
    );
  }
}

export default ViewImages;
