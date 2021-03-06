import React, { Component } from "react";
import Layout from "../components/layout/Layout";
import SlideImages from "../components/global/SlideImages";
import Counter from "../components/global/Counter";
import { Row, SlideContainer } from "./Cart.styled";
import ProductInfo from "../components/global/ProductInfo";
import TotalCart from "../components/global/TotalCart";

class Cart extends Component {
  constructor() {
    super();
    this.sizeStyles = {
      width: "300px",
      height: "45px",
      marginBottom: "16px",
      paddingTop: "0px",
    };
    this.colorStyles = {
      width: "114px",
      height: "32px",
      marginBottom: "6px",
    };
    this.counterStyles = {
      counterContainerWidth: "45px",
      counterContainerHeight: "288px",
      counterBtnWidth: "45px",
      counterBtnHeight: "45px",
      counterBtnFont: "18px",
      counterFont: "24px",
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
      <Layout>
        <Row>
          <ProductInfo
            storeName="Apollo"
            productName="Running Short"
            productNameMb="20px"
            sizes={this.sizes}
            colors={this.colors}
            cart
            cartPrice="$50.00"
            sizeStyles={this.sizeStyles}
            colorStyles={this.colorStyles}
            boxWidth="32px"
            boxHeight="32px"
          />
          <SlideContainer>
            <Counter {...this.counterStyles} />
            <SlideImages
              isSlider
              containerWidth="200px"
              containerHeight="288px"
              sliderImageWidth={200}
              sliderImageHeight={288}
              imagesArray={this.imageToggle}
            />
          </SlideContainer>
        </Row>
        <Row>
          <ProductInfo
            storeName="Apollo"
            productName="Running Short"
            productNameMb="20px"
            sizes={this.sizes}
            colors={this.colors}
            cart
            cartPrice="$50.00"
            sizeStyles={this.sizeStyles}
            colorStyles={this.colorStyles}
            boxWidth="32px"
            boxHeight="32px"
          />
          <SlideContainer>
            <Counter {...this.counterStyles} />
            <SlideImages
              isSlider
              containerWidth="200px"
              containerHeight="288px"
              sliderImageWidth={200}
              sliderImageHeight={288}
              imagesArray={this.imageToggle}
            />
          </SlideContainer>
        </Row>
        <TotalCart />
      </Layout>
    );
  }
}

export default Cart;
