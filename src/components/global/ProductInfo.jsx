import React, { Component } from "react";
import {
  ColorBox,
  Container,
  Content,
  Label,
  Options,
  Price,
  ProductName,
  Span,
  StoreName,
  Wrapper,
} from "./ProductInfo.styled";

class ProductInfo extends Component {
  constructor() {
    super();
    this.sizes = ["XS", "S", "M", "L"];
    this.colors = ["#D3D2D5", "#2B2B2B", "#0F6450"];
  }
  render() {
    return (
      <Wrapper>
        <StoreName>Apollo</StoreName>
        <ProductName>Runninng Short</ProductName>
        <Container marginTop="0px">
          <Label>SIZE:</Label>
          <Content width="300px" height="45px" marginBottom="29px">
            {this.sizes.map((size, index) => {
              return (
                <Options key={index}>
                  <Span>{size}</Span>
                </Options>
              );
            })}
          </Content>
        </Container>
        <Container>
          <Label>COLOR:</Label>
          <Content width="114px" height="32px" marginBottom="45px">
            {this.colors.map((item, index) => {
              return <ColorBox key={index} background={item} />;
            })}
          </Content>
        </Container>
        <Container>
          <Label>PRICE:</Label>
          <Price>$50.00</Price>
        </Container>
      </Wrapper>
    );
  }
}

export default ProductInfo;
