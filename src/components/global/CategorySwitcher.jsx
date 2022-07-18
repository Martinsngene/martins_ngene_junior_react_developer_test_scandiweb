import { Query } from "@apollo/client/react/components";
import React, { Component } from "react";
import { connect } from "react-redux";
import { GET_ALL_CATEGORIES } from "../../api/schema/schema";
import { Button, Container } from "./CategorySwitcher.styled";
import { SETCATEGORY } from "../../app/actions/counter";

class CategorySwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "",
    };
    // this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleSetCategory(value) {
    this.props.SETCATEGORY(value);
  }
  render() {
    return (
      <React.Fragment>
        <Query query={GET_ALL_CATEGORIES}>
          {({ loading, error, data }) => {
            if (loading) return `Loading...`;
            if (error) return `Something went wrong: ${error}`;

            return (
              <Container>
                {/* This map uses the fetched data to display the category name */}
                {data.categories.map((category) => {
                  return (
                    <Button
                      key={category.name}
                      // onClick={() => this.setState({ current: category.name })}
                      onClick={() =>
                        this.handleSetCategory(category.name.toUpperCase())
                      }
                    >
                      {category.name.toUpperCase()}
                    </Button>
                  );
                })}
              </Container>
            );
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default connect(null, { SETCATEGORY })(CategorySwitcher);
