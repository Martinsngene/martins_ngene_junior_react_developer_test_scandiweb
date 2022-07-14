import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  width: 285px;
  height: 56px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0px;
  width: 90px;
  height: 56px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: #1d1f22;
  border: none;
  background: #fff;
  cursor: pointer;

  // Apply style on hover
  &:hover {
    color: #5ece7b;
    border-bottom: 2px solid #5ece7b;
  }
  &:visited {
    color: #5ece7b;
    border-bottom: 2px solid #5ece7b;
  }
`;
