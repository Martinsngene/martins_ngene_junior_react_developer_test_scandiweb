import React, { Component } from "react";
import Card from "../components/global/Card";
import CardContainer from "../components/global/CardContainer";
import Layout from "../components/layout/Layout";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
    };
  }

  render() {
    return (
      <Layout>
        <CardContainer heading={"Women"}>
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </Layout>
    );
  }
}

export default Home;
