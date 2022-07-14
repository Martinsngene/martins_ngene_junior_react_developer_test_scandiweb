import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 292px;
`;

export const StoreName = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #1d1f22;
  margin-bottom: 16px;
`;

export const ProductName = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #1d1f22;
  margin-top: 0px;
  margin-bottom: 43px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.marginTop};
`;

export const Label = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #1d1f22;
`;

export const Options = styled.button`
  box-sizing: border-box;
  width: 63px;
  height: 45px;
  background: #fff;
  border: 1px solid #1d1f22;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ColorBox = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background: ${(props) => props.background};
  cursor: pointer;
`;

export const Price = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  align-items: center;
  color: #1d1f22;
  margin-top: 0px;
  margin-bottom: 20px;
`;

export const Span = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: #1d1f22;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 0px;
  margin-bottom: ${(props) => props.marginBottom};
`;
