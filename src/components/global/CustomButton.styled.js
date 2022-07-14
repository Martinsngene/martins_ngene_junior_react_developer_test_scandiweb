import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: #fff;
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  cursor: pointer;
`;

export const Label = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => props.fontSize};
  line-height: 120%;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.color};
`;
