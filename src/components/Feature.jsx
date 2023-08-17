import React from "react";
import { styled } from "styled-components";
import appPhone from "../images/appPhone.png";
import { AnimatedShapes } from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Left = styled.div`
  width: 50%;
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  margin-top: 30px;
  font-size: 70px;
`;

const Subtitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 80%;
  object-fit: cover;
  height: 100%;
`;
export const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={appPhone}></Image>
      </Left>
      <Right>
        <Title>
          <b>Good</b> Design <br />
          <b>Good</b> Business
        </Title>
        <Subtitle>We know that good design means good business.</Subtitle>
        <Desc>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </Desc>
        <Desc>
          We care your business and guarantee you to achieve marketing goals.
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes/>
    </Container>
  );
};
