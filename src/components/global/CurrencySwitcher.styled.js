import styled from "styled-components";

export const Dropdown = styled.select`
  outline: none;
  border: none;
  width: 38px;
  height: 29px;
  font-size: 18px;

  &:hover {
    background: #eeeeee;
  }

  option {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
    text-align: right;
    color: #1d1f22;
  }
`;
