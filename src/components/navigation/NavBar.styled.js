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
  height: auto;
  background: #fff;
  border: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 22px;
  width: 204px;
  height: 40px;
`;
