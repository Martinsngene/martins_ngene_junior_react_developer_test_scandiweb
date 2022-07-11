import React, { Component } from "react";
import styled from "styled-components";

const Btn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  width: 292px;
  height: 52px;
  color: #fff;
  background: #5ece7b;
  border: none;
  cursor: pointer;
`;

const Label = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

class CustomButton extends Component {
  render() {
    return (
      <Btn>
        <Label>{this.props.label}</Label>
      </Btn>
    );
  }
}

export default CustomButton;
