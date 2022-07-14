import styled from "styled-components";

export const Container = styled.div`
  width: 45px;
  height: 288px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.input`
  background: #fff;
  border: 1px solid #1d1f22;
  width: 45px;
  height: 45px;
  color: #1d1f22;
  font-size: 18px;
  padding: 0px;
`;

export const Count = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 160%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #1d1f22;
`;
