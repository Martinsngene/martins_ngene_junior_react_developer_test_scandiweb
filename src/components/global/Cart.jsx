import React, { Component } from "react";
import { BtnContainer, Container, Counter, Header, Tray } from "./Cart.styled";
import CustomButton from "./CustomButton";
import TrayItem from "./TrayItem";

class Cart extends Component {
  render() {
    return (
      <Container>
        <Tray>
          <div>
            <Header>My Bag</Header> <Counter>3 items</Counter>
          </div>
          <TrayItem />

          <BtnContainer>
            <CustomButton
              background="#fff"
              border="1px solid #1D1F22"
              width="140px"
              color="#1D1F22"
              height="52px"
              label="VIEW BAG"
              fontSize="14px"
              padding="16px 16px"
            />

            <CustomButton
              background="#5ece7b"
              border="none"
              width="140px"
              color="#fff"
              height="52px"
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
