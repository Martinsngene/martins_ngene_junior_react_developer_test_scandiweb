import React, { Component } from "react";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import ViewImages from "../components/global/ViewImages";
import CustomButton from "../components/global/CustomButton";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 100px;
`;

const Column1 = styled.div`
  grid-column: span 8 / span 8;
`;

const Column2 = styled.div`
  width: 292px;
  grid-column: span 4 / span 4;
`;

const Text = styled.p`
  width: 292px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 159.96%;
  color: #1d1f22;
`;

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
            <CustomButton label="ADD TO CART" />
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
