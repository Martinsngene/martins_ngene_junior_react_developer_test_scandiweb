import React, { Component } from "react";
import styled from "styled-components";
import CategorySwitcher from "../global/CategorySwitcher";
import CurrencySwitcher from "../global/CurrencySwitcher";
import Image from "../global/Image";

const Wrapper = styled.nav`
  height: 80px;
  padding-left: 101px;
  padding-right: 101px;
  background: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  height: 41px;
  width: 41px;
`;

const Cart = styled.div`
  height: 20px;
  width: 20px;
`;

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <CategorySwitcher />
          <Logo>
            <Image alt="logo" src="/assets/logo.png" />
          </Logo>
          <Cart>
            <Image alt="cart" src="/assets/cart.png" />
          </Cart>
          <CurrencySwitcher />
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default NavBar;
