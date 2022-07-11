import React, { Component } from "react";
import styled from "styled-components";
import Image from "./Image";

const Wrapper = styled.div`
  display: flex;
  width: 724px;
  align-items: start;
  justify-content: space-between;
`;

const Item1 = styled.div`
  width: 79px;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Item2 = styled.div`
  width: 610px;
  height: 511px;
`;

const Button = styled.button`
  padding: 0;
  background: #fff;
  border: none;
  cursor: pointer;
`;

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
