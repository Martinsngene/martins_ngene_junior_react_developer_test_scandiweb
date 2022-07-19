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
    this.setState({ url: item });
  }

  render() {
    // This variable is used to set the number of toggle images to a limit of 3
    let size = 3;
    return (
      <Wrapper>
        <Item1>
          {/* The slice() method keeps the length of the array at 3 */}
          {this.props.displayImageToggler.slice(0, size).map((item, index) => {
            return (
              <Button key={index} onClick={() => this.updateState(index)}>
                <Image alt="sample select" src={item} width={79} height={80} />
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
