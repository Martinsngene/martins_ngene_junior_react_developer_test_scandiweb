import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 80px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  z-index: 50;
  width: 100%;
  height: 100%;
  background: rgba(57, 55, 72, 0.22);
  overflow: auto;
`;

export const Tray = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 32px 16px;
  gap: 32px;
  position: absolute;
  width: 325px;
  height: 677px;
  right: 72px;
  top: 0px;
  background: #ffffff;
`;

export const Heading = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  text-align: right;
  color: #1d1f22;
`;
export const Header = styled.span``;

export const Counter = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  text-align: right;
  color: #1d1f22;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Row = styled.div`
  width: 100%;
  background: #fff;
`;
