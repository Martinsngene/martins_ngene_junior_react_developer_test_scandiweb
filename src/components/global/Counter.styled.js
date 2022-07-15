import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.input`
  background: #fff;
  border: 1px solid #1d1f22;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: #1d1f22;
  font-size: ${(props) => props.fontSize};
  padding: 0px;
`;

export const Count = styled.p`
  font-weight: 500;
  font-size: ${(props) => props.fontSize};
  line-height: 160%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #1d1f22;
`;
