import React, { Component } from "react";
import styled from "styled-components";
import Image from "./Image";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 386px;
  height: 444px;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;

  // Apply style on hover
  &:hover {
    filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
  }
`;

const ImageContainer = styled.div``;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px;
  padding: 0px;
  width: 354px;
  height: 58px;
`;

const Name = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
`;

const Price = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
`;

class Card extends Component {
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <ImageContainer>
            <Image
              alt="dress"
              src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80"
              width={354}
              height={330}
            />
          </ImageContainer>
          <Details>
            <Name>Dress gown</Name>
            <Price>$ 300</Price>
          </Details>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default Card;
