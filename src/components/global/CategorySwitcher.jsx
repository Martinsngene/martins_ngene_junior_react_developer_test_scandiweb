import React, { Component } from "react";
import Women from "../categories/Women";
import Men from "../categories/Men";
import Kids from "../categories/Kids";

class CategorySwitcher extends Component {
  constructor() {
    super();
    this.categories = [
      { text: "WOMEN", id: "00" },
      { text: "MEN", id: "01" },
      { text: "KIDS", id: "02" },
    ];
    this.categoryTab = [<Women key={0} />, <Men key={1} />, <Kids key={2} />];
    this.state = {
      current: 2,
    };
  }
  render() {
    return (
      <React.Fragment>
        <div>{this.categoryTab[this.state.current]}</div>
      </React.Fragment>
    );
  }
}

export default CategorySwitcher;
