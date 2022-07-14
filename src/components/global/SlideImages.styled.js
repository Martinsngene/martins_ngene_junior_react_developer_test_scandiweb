import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 200px;
  height: 288px;
`;

export const Button = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  background: rgba(0, 0, 0, 0.73);
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;
