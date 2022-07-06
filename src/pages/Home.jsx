import React, { Component } from "react";
import Layout from "../components/layout/Layout";
import Women from "../components/categories/Women";
import Men from "../components/categories/Men";
import Kids from "../components/categories/Kids";

class Home extends Component {
  constructor() {
    super();
    this.categoryTab = [<Women key={0} />, <Men key={1} />, <Kids key={2} />];
    this.state = {
      current: 2,
    };
  }
  render() {
    return (
      <Layout>
        <div>{this.categoryTab[this.state.current]}</div>
      </Layout>
    );
  }
}

export default Home;
