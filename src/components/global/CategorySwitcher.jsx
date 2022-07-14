import React, { Component } from "react";
import { Button, Container } from "./CategorySwitcher.styled";

class CategorySwitcher extends Component {
  constructor(props) {
    super(props);
    this.categories = [
      { text: "WOMEN", id: "00", current: 0 },
      { text: "MEN", id: "01", current: 1 },
      { text: "KIDS", id: "02", current: 2 },
    ];

    this.state = {
      current: 0,
    };
  }

  render() {
    // console.log(this.state.current);
    return (
      <React.Fragment>
        <Container>
          {this.categories.map((category) => {
            return (
              <Button
                key={category.id}
                onClick={() => this.setState({ current: category.current })}
              >
                {category.text}
              </Button>
            );
          })}
        </Container>
      </React.Fragment>
    );
  }
}

export default CategorySwitcher;
