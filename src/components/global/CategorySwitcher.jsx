import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  width: 285px;
  height: 56px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0px;
  width: 90px;
  height: 56px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: #1d1f22;
  border: none;
  background: #fff;
  cursor: pointer;

  // Apply style on hover
  &:hover {
    color: #5ece7b;
    border-bottom: 2px solid #5ece7b;
  }
  &:visited {
    color: #5ece7b;
    border-bottom: 2px solid #5ece7b;
  }
`;

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
