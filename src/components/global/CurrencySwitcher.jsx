import React, { Component } from "react";
import styled from "styled-components";

const Dropdown = styled.select`
  outline: none;
  border: none;
  width: 38px;
  height: 29px;
  font-size: 18px;
`;
class CurrencySwitcher extends Component {
  constructor() {
    super();
    this.currencies = [
      { symbol: "$ USD", id: "01" },
      { symbol: "€ EUR", id: "02" },
      { symbol: "¥ JPY", id: "03" },
    ];
  }

  render() {
    return (
      <React.Fragment>
        <Dropdown>
          {this.currencies.map((item, index) => {
            return <option key={index}>{item.symbol}</option>;
          })}
        </Dropdown>
      </React.Fragment>
    );
  }
}

export default CurrencySwitcher;
