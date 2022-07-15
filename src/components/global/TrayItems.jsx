import React, { Component } from "react";
import { Container, Row, SlideContainer } from "./TrayItems.styled";
import ProductInfo from "./ProductInfo";
import Counter from "./Counter";
import SlideImages from "./SlideImages";

class TrayItems extends Component {
  constructor() {
    super();
    this.sizeStyles = {
      width: "120px",
      height: "48px",
      marginBottom: "0px",
      paddingTop: "0px",
    };
    this.colorStyles = {
      width: "68px",
      height: "44px",
      marginBottom: "0px",
    };
    this.counterStyles = {
      counterContainerWidth: "24px",
      counterContainerHeight: "190px",
      counterBtnWidth: "24px",
      counterBtnHeight: "24px",
      counterBtnFont: "16px",
      counterFont: "16px",
    };
    this.sizes = ["XS", "S", "M", "L"];
    this.colors = ["#D3D2D5", "#2B2B2B", "#0F6450"];
    this.imageToggle = [
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

      "https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ];
  }
  render() {
    return (
      <Container>
        <Row>
          <ProductInfo
            storeName="Apollo"
            productName="Running Short"
            productNameMb="4px"
            sizes={this.sizes}
            colors={this.colors}
            cart
            smallSize
            smallFont
            cartPrice="$50.00"
            cartPriceMb="20px"
            sizeStyles={this.sizeStyles}
            colorStyles={this.colorStyles}
            boxWidth="20px"
            boxHeight="20px"
            storeFont="16px"
            productFont="16px"
            priceFont="16px"
            labelFont="16px"
            smallMb
            smallLabelMargin
          />
          <SlideContainer>
            <Counter {...this.counterStyles} />
            <SlideImages
              isSlider={false}
              containerWidth="121px"
              containerHeight="190px"
              sliderImageWidth={121}
              sliderImageHeight={190}
              imagesArray={this.imageToggle}
            />
          </SlideContainer>
        </Row>
        <Row>
          <ProductInfo
            storeName="Apollo"
            productName="Running Short"
            productNameMb="4px"
            sizes={this.sizes}
            colors={this.colors}
            cart
            smallSize
            smallFont
            cartPrice="$50.00"
            cartPriceMb="20px"
            sizeStyles={this.sizeStyles}
            colorStyles={this.colorStyles}
            boxWidth="20px"
            boxHeight="20px"
            storeFont="16px"
            productFont="16px"
            priceFont="16px"
            labelFont="16px"
            smallMb
            smallLabelMargin
          />
          <SlideContainer>
            <Counter {...this.counterStyles} />
            <SlideImages
              isSlider={false}
              containerWidth="121px"
              containerHeight="190px"
              sliderImageWidth={121}
              sliderImageHeight={190}
              imagesArray={this.imageToggle}
            />
          </SlideContainer>
        </Row>
      </Container>
    );
  }
}

export default TrayItems;
