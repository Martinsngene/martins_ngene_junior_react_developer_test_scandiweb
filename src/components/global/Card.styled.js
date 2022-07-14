import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 386px;
  height: 444px;
  justify-content: center;
  align-items: center;
  padding: 16px;
  position: relative;
  // Apply style on hover
  &:hover {
    box-shadow: 0px 4px 35px 0px #a8acb030;
  }
`;

export const ImageContainer = styled.div``;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 24px;
  padding: 0px;
  width: 354px;
  height: 58px;
`;

export const Name = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
  margin: 0px;
  padding: 0px;
`;

export const Price = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  margin: 0px;
  padding: 0px;
`;

export const CartIcon = styled.button`
  display: ${(props) => (props.showIcon ? "block" : "none")};
  position: absolute;
  top: 320px;
  right: 31px;
  border: none;
  background: transparent;
  cursor: pointer;
`;
