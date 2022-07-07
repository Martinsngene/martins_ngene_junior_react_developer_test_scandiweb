import React, { Component } from "react";
import styled from "styled-components";
import CategorySwitcher from "../global/CategorySwitcher";
import CurrencySwitcher from "../global/CurrencySwitcher";
import Image from "../global/Image";

const Wrapper = styled.nav`
  height: 80px;
  padding-left: 101px;
  padding-right: 101px;
  // background: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  max-width: 100%;
  height: auto;
`;

const Cart = styled.div`
  max-width: 100%;
  height: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 22px;
  width: 204px;
  height: 40px;
`;

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <CategorySwitcher />
          <Logo>
            <Image alt="logo" src="/assets/logo.png" width={41} height={41} />
          </Logo>
          <Container>
            <CurrencySwitcher />
            <Cart>
              <Image alt="cart" src="/assets/cart.png" width={20} height={20} />
            </Cart>
          </Container>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default NavBar;
