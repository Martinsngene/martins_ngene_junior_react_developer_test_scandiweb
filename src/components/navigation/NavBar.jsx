import React, { Component } from "react";
import CartTray from "../global/CartTray";
import CategorySwitcher from "../global/CategorySwitcher";
import CurrencySwitcher from "../global/CurrencySwitcher";
import Image from "../global/Image";
import { Badge, CartIcon, Container, Logo, Wrapper } from "./NavBar.styled";

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      showCart: false,
    };
    // Binding this
    this.handleShowCart = this.handleShowCart.bind(this);
  }

  handleShowCart() {
    this.setState((prevState) => ({
      showCart: !prevState.showCart,
    }));
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
            <CartIcon onClick={this.handleShowCart}>
              <Badge>3</Badge>
              <Image alt="cart" src="/assets/cart.png" width={30} height={30} />
            </CartIcon>
            {this.state.showCart && (
              <CartTray closeCart={this.handleShowCart} />
            )}
          </Container>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default NavBar;
