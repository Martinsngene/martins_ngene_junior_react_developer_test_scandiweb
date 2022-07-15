import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin-top: 32px;
  width: 279px;
  height: 159px;
`;

export const Label = styled.span`
  font-weight: 400;
  font-size: 24px;
  color: #1d1f22;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 24px;
  color: #1d1f22;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  width: 70%;
  font-weight: 700;
  font-size: 24px;
  color: #1d1f22;
`;
