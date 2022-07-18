import React, { Component } from "react";
import { Query } from "@apollo/client/react/components";
import { connect } from "react-redux";
import Card from "../components/global/Card";
import CardContainer from "../components/global/CardContainer";
import Layout from "../components/layout/Layout";
import { GET_ALL_PRODUCTS } from "../api/schema/schema";
import { CurrentState, setCategory } from "../components/utility/utility";
import { SETCATEGORY } from "../app/actions/counter";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: Math.random() * 10,
    };
  }
  render() {
    return (
      <Layout>
        {/* Query tag is used to get data from the API */}
        <Query query={GET_ALL_PRODUCTS}>
          {({ loading, error, data }) => {
            if (loading) return `Loading...`;
            if (error) return `Something went wrong: ${error}`;
            console.log(data.categories[0].name);

            let value = "all";
            return (
              <CardContainer
                // Utility function us used here to set category name
                heading={data.categories[setCategory(value)].name.toUpperCase()}
              >
                {/* Utility function us used here to filter data */}
                {data.categories[setCategory(value)].products.map((product) => {
                  return (
                    <Card
                      key={product.id}
                      src={product.gallery[0]}
                      brand={product.brand + " " + product.name}
                      price={product.prices[0].amount}
                    />
                  );
                })}
                <CurrentState />
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
    count: state.count,
  };
};

const mapDispatchToProps = {
  SETCATEGORY,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
