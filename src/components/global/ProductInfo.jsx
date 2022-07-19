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
        <StoreName small={this.props.smallMb} fontSize={this.props.storeFont}>
          {this.props.storeName}
        </StoreName>
        <ProductName
          fontSize={this.props.productFont}
          marginBottom={this.props.productNameMb}
        >
          {this.props.productName}
        </ProductName>
        {this.props.cart && (
          <Container>
            <Price
              fontSize={this.props.priceFont}
              marginBottom={this.props.cartPriceMb}
            >
              {this.props.cartPrice}
            </Price>
          </Container>
        )}
        <Container height={this.props.containerHeight}>
          <Label
            small={this.props.smallLabelMargin}
            fontSize={this.props.labelFont}
          >
            {this.props.sizesLabel}
          </Label>
          <Content {...this.props.sizeStyles}>
            {this.props.sizes.map((size, index) => {
              return (
                <Options small={this.props.smallSize} key={index}>
                  <Span small={this.props.smallFont}>{size}</Span>
                </Options>
              );
            })}
          </Content>
        </Container>
        <Container height={this.props.containerHeight}>
          <Label
            small={this.props.smallLabelMargin}
            fontSize={this.props.labelFont}
          >
            COLOR:
          </Label>
          <Content {...this.props.colorStyles}>
            {this.props.colors.map((item, index) => {
              return (
                <ColorBox
                  height={this.props.boxHeight}
                  width={this.props.boxWidth}
                  key={index}
                  background={item.value}
                />
              );
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
