import React, { Component } from "react";
import { BtnContainer, Container, Counter, Header, Tray } from "./Cart.styled";
import CustomButton from "./CustomButton";

class Cart extends Component {
  render() {
    return (
      <Container onClick={this.props.closeCart}>
        <Tray>
          <div>
            <Header>My Bag</Header> <Counter>3 items</Counter>
          </div>

          <BtnContainer>
            <CustomButton
              background="#fff"
              border="1px solid #1D1F22"
              width="140px"
              color="#1D1F22"
              label="VIEW BAG"
              fontSize="14px"
              padding="16px 16px"
            />

            <CustomButton
              background="#5ece7b"
              border="none"
              width="140px"
              color="#fff"
              label="CHECK OUT"
              fontSize="14px"
              padding="16px 16px"
            />
          </BtnContainer>
        </Tray>
      </Container>
    );
  }
}

export default Cart;
