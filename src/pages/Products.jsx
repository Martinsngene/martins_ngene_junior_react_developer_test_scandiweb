import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import Card from "../components/global/Card";
import CardContainer from "../components/global/CardContainer";
import Layout from "../components/layout/Layout";
import { GET_ALL_PRODUCTS } from "../api/schema/schema";
import { SETCATEGORY } from "../app/actions/counter";

class Home extends Component {
  render() {
    return (
      <Layout>
        {/* Query tag is used to get data from the API */}
        <Query query={GET_ALL_PRODUCTS}>
          {({ loading, error, data }) => {
            if (loading) return `Loading...`;
            if (error) return `Something went wrong: ${error}`;

            // Variable is used to filter for category selected
            let categoryName = data.categories[this.props.count].name;

            return (
              <CardContainer
                // mapToStateProps is used here to set category name
                heading={categoryName.toUpperCase()}
              >
                {/* // mapToStateProps is used here to filter by category index */}
                {data.categories[this.props.count].products.map((product) => {
                  return (
                    <Card
                      key={product.id}
                      src={product.gallery[0]}
                      brand={product.brand + " " + product.name}
                      price={product.prices[0].amount}
                      routeTo={`/${product.id}`}
                      onClick={(event) => {
                        event.stopPropagation();
                        console.log("Hi button");
                      }}
                    />
                  );
                })}
              </CardContainer>
            );
          }}
        </Query>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = {
  SETCATEGORY,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
