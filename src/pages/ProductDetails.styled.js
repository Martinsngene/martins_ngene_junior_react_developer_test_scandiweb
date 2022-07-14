import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 100px;
`;

export const Column1 = styled.div`
  grid-column: span 8 / span 8;
`;

export const Column2 = styled.div`
  width: 292px;
  grid-column: span 4 / span 4;
`;

export const Text = styled.p`
  width: 292px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 159.96%;
  color: #1d1f22;
`;
