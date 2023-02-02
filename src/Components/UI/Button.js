import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <StyledButton
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  cursor: pointer;

  font: inherit;
  border: 1px solid #4f005f;
  background: white;
  color: purple;
  padding: 0.75rem 3.5rem;
  cursor: pointer;
  font-size: 1.15rem;
  border-radius: 30px;

  &:hover,
  &:active {
    background: purple;
    border-color: #741188;
    color: white;
  }

  &:focus {
    outline: none;
  }

  &:disabled,
  &:focus:disabled,
  &:hover:disabled,
  &:disabled {
    background: #ccc;
    border-color: #ccc;
    color: #666666;
    cursor: not-allowed;
  }
`;
