import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import DOMPurify from "dompurify";
import Layout from "../components/layout/Layout";
import ViewImages from "../components/global/ViewImages";
import CustomButton from "../components/global/CustomButton";
import ProductInfo from "../components/global/ProductInfo";
import { Column1, Column2, Wrapper, Text } from "./ProductDetails.styled";
import {
  filterProductAttributes,
  withRouter,
} from "../components/utility/utility";
import { GET_PRODUCT } from "../api/schema/schema";

class Product extends Component {
  constructor() {
    super();
    this.sizeStyles = {
      width: "300px",
      height: "45px",
      marginBottom: "29px",
    };
    this.colorStyles = {
      width: "200px",
      height: "32px",
      marginBottom: "45px",
    };

    this.sizes = ["XS", "S", "M", "L"];
    this.colors = ["#D3D2D5", "#2B2B2B", "#0F6450"];
  }

  state = {
    id: "",
  };

  // On component mount, the setState function sets the parameter from the url of the current page
  // which can now be accessed from the state object.
  componentDidMount() {
    this.setState({
      id: this.props.params.id,
    });
  }

  render() {
    // Product id from the state Obj, used here as a parameter to filter data and
    // get specific product by id
    let productId = this.state.id;

    return (
      <Layout>
        <Query
          query={GET_PRODUCT}
          variables={{
            productId: productId,
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return `Loading...`;
            if (error) return `Something went wrong: ${error}`;
            // This variable contains the attributes array
            // const attributes = data.product.attributes[0].items;

            const attributes = data.product.attributes[0].items;

            console.log(attributes);

            const isContainsColor = filterProductAttributes(attributes);

            // console.log(filterProductAttributes(data.product.attributes));
            return (
              <Wrapper>
                <Column1>
                  <ViewImages
                    displayImageToggler={data.product.gallery}
                    displayImage={data.product.gallery}
                  />
                </Column1>
                <Column2>
                  <ProductInfo
                    sizeStyles={this.sizeStyles}
                    colorStyles={this.colorStyles}
                    storeName={data.product.brand}
                    productName={data.product.name}
                    productNameMb="43px"
                    sizes={this.sizes}
                    colors={attributes}
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
                  {/* By default, React escapes the HTML to prevent XSS (Cross-site scripting).
                  In order to render HTML, we use the dangerouslySetInnerHTML property: */}
                  <Text
                    dangerouslySetInnerHTML={{
                      // To play safe, we sanitize the content using the sanitize function from the dompurify, an npm package
                      // This is most important if we're getting the information from an external API
                      __html: DOMPurify.sanitize(data.product.description),
                    }}
                  />
                </Column2>
              </Wrapper>
            );
          }}
        </Query>
      </Layout>
    );
  }
}

export default withRouter(Product);
