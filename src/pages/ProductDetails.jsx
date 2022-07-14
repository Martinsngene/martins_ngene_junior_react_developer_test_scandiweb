import React, { Component } from "react";
import Layout from "../components/layout/Layout";
import ViewImages from "../components/global/ViewImages";
import CustomButton from "../components/global/CustomButton";
import ProductInfo from "../components/global/ProductInfo";
import { Column1, Column2, Wrapper, Text } from "./ProductDetails.styled";
// import SlideImages from "../components/global/SlideImages";

class Product extends Component {
  constructor() {
    super();
    this.sampleImageToggle = [
      {
        img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        id: 0,
      },
      {
        img: "https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        id: 1,
      },
      {
        img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        id: 2,
      },
    ];

    this.imageToggle = [
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

      "https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ];
  }
  render() {
    return (
      <Layout>
        <Wrapper>
          <Column1>
            <ViewImages
              displayImageToggler={this.sampleImageToggle}
              displayImage={this.imageToggle}
            />
          </Column1>
          <Column2>
            <ProductInfo />
            <CustomButton
              background="#5ece7b"
              border="none"
              width="292px"
              color="#fff"
              label="ADD TO CART"
              padding="16px 32px"
            />
            <Text>
              Find stunning women's cocktail dresses and party dresses. Stand
              out in lace and metallic cocktail dresses and party dresses from
              all your favorite brands.
            </Text>
          </Column2>
        </Wrapper>
        {/* <SlideImages imagesArray={this.imageToggle} /> */}
      </Layout>
    );
  }
}

export default Product;
