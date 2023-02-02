import React from "react";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Button from "../UI/Button";
import backgroundImage from "../../assets/FearlessBackground.jpg";

export default function AnimateText(props) {
  const enterAppHandler = () => {
    props.enterApp();
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        width: "100%",
        height: "1500px",
        position: "absolute",
        top: "0",
      }}
    >
      <Container style={{ marginTop: "10vh" }}>Welcome</Container>
      <Container>To</Container>
      <PurpleCowCounterText>Purple Cow Counter</PurpleCowCounterText>
      <Container>A product of Fearless</Container>
      <div style={{ marginLeft: "16vw", marginTop: "5vh" }}>
        <Button onClick={enterAppHandler}>ENTER</Button>
      </div>
    </div>
  );
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  25% {
    opacity: 1;
    transform: translateY(0);

  }
  75% {
    opacity: 1;
    transform: translateY(0);


  }
  100% {
    opacity: 0;
    transform: translateY(-100px);

  }
`;

const PurpleCowCounterText = styled.div`
  color: white;
  font-size: 2.5rem;
  margin-left: 10vw;
  margin-top: 2vh;
  text-shadow: 13px 11px 12px whitesmoke;
  opacity: 0;
  animation: 6s ${fadeIn} ease-out;
  animation-fill-made: forwards;
  animation-iteration-count: infinite;
  font-family: monospace;
`;

const Container = styled.div`
  color: white;
  font-size: 2.5rem;
  margin-left: 10vw;
  margin-top: 2vw;
  text-shadow: 13px 11px 12px whitesmoke;
  font-family: monospace;
`;
