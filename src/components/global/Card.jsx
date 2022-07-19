import React, { Component } from "react";
import {
  CartIcon,
  Details,
  ImageContainer,
  Link,
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
        <Wrapper
          onClick={() => {
            console.log("Hello World");
          }}
          onMouseOver={this.setIcon}
          onMouseOut={this.removeIcon}
        >
          <CartIcon showIcon={this.state.showIcon} onClick={this.props.onClick}>
            <Image alt="icon" width={52} height={52} src="/assets/cart2.png" />
          </CartIcon>
          <ImageContainer>
            <Image
              alt="product sample"
              src={this.props.src}
              width={354}
              height={330}
            />
          </ImageContainer>
          <Link href={this.props.routeTo}>
            <Details>
              <Name>{this.props.brand}</Name>
              <Price>{this.props.price}</Price>
            </Details>
          </Link>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default Card;
