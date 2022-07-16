import React, { Component } from "react";
import styled from "styled-components";

const Select = styled.div`
  position: relative;
  margin-top: 2.5px;
  cursor: pointer;
`;

const SelectButton = styled.span`
  position: relative;
  background: none;
  border: none;
  /* width: fit-content !important; */
  display: flex;
  align-items: center;
`;

const Input = styled.input.attrs(({ selected }) => ({
  type: "text",
  defaultValue: selected || "",
  value: selected || "",
  readOnly: true,
}))`
  background: inherit;
  width: 25px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  text-align: right;
`;

const Icon = styled.span.attrs(() => ({
  ariaHidden: true,
}))`
  display: flex;
  align-items: center;
`;

const SelectOption = styled.ul`
  list-style-type: none;
  position: absolute;
  background: #ffffff;
  left: -20px;
  z-index: 10;
  overflow: auto;
  padding-left: 0;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 2.5px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const SelectOptionList = styled.li`
  position: relative;
  width: 114px;
  padding: 8px 0px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #eeeeee;
  }
`;

export default class BasicSelect extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current?.contains(event.target)) {
      this.setState({
        open: false,
      });
    }
  }

  render() {
    return (
      <Select>
        <SelectButton
          onClick={() =>
            this.setState(() => ({
              open: true,
            }))
          }
        >
          <Input selected={this.props.currency.symbol} />
          <Icon>{this.state.open === false ? ">" : "<"}</Icon>
        </SelectButton>
        {this.state.open && (
          <SelectOption ref={this.wrapperRef}>
            {this.props.query.map((item, itemIdx) => (
              <SelectOptionList
                key={itemIdx}
                value={item.text}
                onClick={() => {
                  this.props.changeCurrency(item);
                  this.setState({
                    open: false,
                  });
                }}
              >
                <span>{item.symbol + " " + item.label}</span>
              </SelectOptionList>
            ))}
          </SelectOption>
        )}
      </Select>
    );
  }
}
