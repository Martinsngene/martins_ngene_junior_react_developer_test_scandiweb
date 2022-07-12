import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 292px;
`;

const StoreName = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #1d1f22;
  margin-bottom: 16px;
`;

const ProductName = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #1d1f22;
  margin-top: 0px;
  margin-bottom: 43px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.marginTop};
`;

const Label = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #1d1f22;
`;

const Options = styled.button`
  box-sizing: border-box;
  width: 63px;
  height: 45px;
  background: #fff;
  border: 1px solid #1d1f22;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ColorBox = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background: ${(props) => props.background};
  cursor: pointer;
`;

const Price = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  align-items: center;
  color: #1d1f22;
  margin-top: 0px;
  margin-bottom: 20px;
`;

const Span = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: #1d1f22;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 0px;
  margin-bottom: ${(props) => props.marginBottom};
`;

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
