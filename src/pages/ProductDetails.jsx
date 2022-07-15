import React, { Component } from "react";
import Layout from "../components/layout/Layout";
import ViewImages from "../components/global/ViewImages";
import CustomButton from "../components/global/CustomButton";
import ProductInfo from "../components/global/ProductInfo";
import { Column1, Column2, Wrapper, Text } from "./ProductDetails.styled";

class Product extends Component {
  constructor() {
    super();
    this.sizeStyles = {
      width: "300px",
      height: "45px",
      marginBottom: "29px",
    };
    this.colorStyles = {
      width: "114px",
      height: "32px",
      marginBottom: "45px",
    };
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

    this.sizes = ["XS", "S", "M", "L"];
    this.colors = ["#D3D2D5", "#2B2B2B", "#0F6450"];
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
            <ProductInfo
              sizeStyles={this.sizeStyles}
              colorStyles={this.colorStyles}
              storeName="Apollo"
              productName="Running Short"
              productNameMb="43px"
              sizes={this.sizes}
              colors={this.colors}
              tag
              Price="$50.00"
              priceMb="20px"
              boxWidth="32px"
              boxHeight="32px"
              storeFont="30px"
              productFont="30px"
              priceFont="24px"
            />
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
      </Layout>
    );
  }
}

export default Product;
