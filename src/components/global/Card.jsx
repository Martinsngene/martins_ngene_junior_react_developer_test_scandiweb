import React, { Component } from "react";
import {
  CartIcon,
  Details,
  ImageContainer,
  Name,
  Price,
  Wrapper,
} from "./Card.styled";
import Image from "./Image";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIcon: false,
    };

    this.setIcon = this.setIcon.bind(this);
    this.removeIcon = this.removeIcon.bind(this);
  }

  setIcon() {
    this.setState({ showIcon: true });
  }
  removeIcon() {
    this.setState({ showIcon: false });
  }
  render() {
    return (
      <React.Fragment>
        <Wrapper onMouseOver={this.setIcon} onMouseOut={this.removeIcon}>
          <CartIcon showIcon={this.state.showIcon} onClick={this.props.onClick}>
            <Image alt="icon" width={52} height={52} src="/assets/cart2.png" />
          </CartIcon>
          <ImageContainer>
            <Image
              alt="dress"
              src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80"
              width={354}
              height={330}
            />
          </ImageContainer>
          <Details>
            <Name>Dress gown</Name>
            <Price>$ 300</Price>
          </Details>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default Card;
