import styled from "styled-components";

export const Wrapper = styled.nav`
  height: 80px;
  padding-left: 101px;
  padding-right: 101px;
  // background: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  max-width: 100%;
  height: auto;
`;

export const CartIcon = styled.button`
  max-width: 100%;
  width: 20px;
  height: 20px;
  position: relative;
  background: #fff;
  border: none;
  cursor: pointer;
`;

export const Badge = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: #43464e;
  border-radius: 50%;
  color: #fff;
  top: -3px;
  right: -25px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 22px;
  width: 204px;
  height: 40px;
`;
