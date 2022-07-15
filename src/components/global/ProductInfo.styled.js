import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 292px;
`;

export const StoreName = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => props.fontSize};
  display: flex;
  align-items: center;
  color: #1d1f22;
  margin-bottom: ${(props) => (props.small | false ? "4px" : "16px")};
`;

export const ProductName = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.fontSize};
  display: flex;
  align-items: center;
  color: #1d1f22;
  margin-top: 0px;
  margin-bottom: ${(props) => props.marginBottom};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  height: ${(props) => props.height};
`;

export const Label = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.fontSize};
  display: flex;
  align-items: center;
  text-align: center;
  color: #1d1f22;
  margin-top: ${(props) => (props.small | false ? "0px" : "16px")};
  margin-bottom: ${(props) => (props.small | false ? "0px" : "16px")};
`;

export const Options = styled.button`
  box-sizing: border-box;
  width: ${(props) => (props.small | false ? "24px" : "63px")};
  height: ${(props) => (props.small | false ? "24px" : "45px")};
  background: #fff;
  border: 1px solid #1d1f22;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ColorBox = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  background: ${(props) => props.background};
  cursor: pointer;
`;

export const Price = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.fontSize};
  display: flex;
  align-items: center;
  color: #1d1f22;
  margin-top: 0px;
  margin-bottom: ${(props) => props.marginBottom};
`;

export const Span = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => (props.small | false ? "12px" : "16px")};
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
