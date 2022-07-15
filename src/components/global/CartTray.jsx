import React, { Component } from "react";
import {
  BtnContainer,
  Container,
  Counter,
  Header,
  Heading,
  Row,
  Tray,
} from "./CartTray.styled";
import CustomButton from "./CustomButton";
import TrayItems from "./TrayItems";

class Cart extends Component {
  render() {
    return (
      <Container>
        <Tray>
          <Header>
            <Heading>My Bag</Heading> <Counter>3 items</Counter>
          </Header>
          <Row style={{ overflow: "scroll" }}>
            <TrayItems />
          </Row>

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
