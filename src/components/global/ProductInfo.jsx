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
  render() {
    return (
      <Wrapper>
        <StoreName>{this.props.storeName}</StoreName>
        <ProductName marginBottom={this.props.productNameMb}>
          {this.props.productName}
        </ProductName>
        {this.props.cart && (
          <Container>
            <Price marginBottom={this.props.cartPriceMb}>
              {this.props.cartPrice}
            </Price>
          </Container>
        )}
        <Container marginTop="0px">
          <Label>SIZE:</Label>
          <Content {...this.props.sizeStyles}>
            {this.props.sizes.map((size, index) => {
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
          <Content {...this.props.colorStyles}>
            {this.props.colors.map((item, index) => {
              return <ColorBox key={index} background={item} />;
            })}
          </Content>
        </Container>
        {this.props.tag && (
          <Container>
            <Label>PRICE:</Label>
            <Price marginBottom={this.props.priceMb}>{this.props.Price}</Price>
          </Container>
        )}
      </Wrapper>
    );
  }
}

export default ProductInfo;
