import React, { Component } from "react";
import { Dropdown } from "./CurrencySwitcher.styled";

class CurrencySwitcher extends Component {
  constructor() {
    super();
    this.currencies = [
      { symbol: "$ USD", id: 0 },
      { symbol: "€ EUR", id: 1 },
      { symbol: "¥ JPY", id: 2 },
    ];
  }

  render() {
    return (
      <React.Fragment>
        <Dropdown>
          {this.currencies.map((item) => {
            return <option key={item.id}>{item.symbol}</option>;
          })}
        </Dropdown>
      </React.Fragment>
    );
  }
}

export default CurrencySwitcher;
