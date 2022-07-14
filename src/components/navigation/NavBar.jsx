import React, { Component } from "react";
import Cart from "../global/Cart";
import CategorySwitcher from "../global/CategorySwitcher";
import CurrencySwitcher from "../global/CurrencySwitcher";
import Image from "../global/Image";
import { CartIcon, Container, Logo, Wrapper } from "./NavBar.styled";

class NavBar extends Component {
  constructor() {
    super();
    this.open = false;
    this.state = {
      showCart: this.open,
    };
  }
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
            <CartIcon onClick={() => this.setState({ showCart: !this.open })}>
              <Image alt="cart" src="/assets/cart.png" width={20} height={20} />
            </CartIcon>
            {this.state.showCart && (
              <Cart closeCart={() => this.setState({ showCart: false })} />
            )}
          </Container>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default NavBar;
