import React from "react";
import HeaderImage from "../../Assets/HomePage.jpg";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <h1>Purple Cow Counter</h1>
      </StyledHeader>
      <div style={{ width: "100%", height: "25rem", overflow: "hidden" }}>
        <StyledHeaderImage
          src={HeaderImage}
          alt="home page"
        ></StyledHeaderImage>
      </div>
    </>
  );
};

const StyledHeaderImage = styled.img`
  width: 110%;
  height: 100%;
  object-fit: cover;
  transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
`;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: black;
  color: white;
  text-shadow: 13px 8px 13px magenta;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

export default Header;
