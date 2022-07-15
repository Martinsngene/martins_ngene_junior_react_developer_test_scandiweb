import React, { Component } from "react";
import CustomButton from "./CustomButton";
import { Container, Label, Price, Row } from "./TotalCart.styled";

class TotalCart extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Label>Tax 21%:</Label>
          <Price>$30.00</Price>
        </Row>
        <Row>
          <Label>Quantity:</Label>
          <Price>2</Price>
        </Row>
        <Row>
          <Label>Total:</Label>
          <Price>$60.00</Price>
        </Row>
        <CustomButton
          background="#5ece7b"
          border="none"
          width="279px"
          color="#fff"
          label="ORDER"
          padding="16px 32px"
        />
      </Container>
    );
  }
}

export default TotalCart;
