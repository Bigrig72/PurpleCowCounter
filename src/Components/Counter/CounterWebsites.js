import React, { useEffect, useReducer, useState } from "react";
import CounterItem from "./CounterItem";
import styled, { keyframes } from "styled-components";
import Grid from "@mui/material/Grid";
import CowImage from "../../Assets/cow.png";
import countapi from "countapi-js";

const deafultCountState = {
  items: [
    {
      id: "1",
      name: "google.com",
      type: "search",
      description: "Google's Search engine",
      visits: 0,
    },
    {
      id: "2",
      name: "bing.com",
      type: "search",
      description: "Microsoft's Search engine",
      visits: 0,
    },
    {
      id: "3",
      name: "cnn.com",
      type: "news",
      description: "Overall news platform, more democratic tailored",
      visits: 0,
    },
    {
      id: "4",
      type: "news",
      name: "foxnews.com",
      description: "A place where republicans search for news",
      visits: 0,
    },
    {
      id: "5",
      name: "nfl.com",
      type: "sports",
      description: "Everything Football!",
      visits: 0,
    },
    {
      id: "6",
      name: "espn.com",
      type: "sports",
      description: "Everything sports!",
      visits: 0,
    },
    {
      id: "7",
      name: "stackoverflow.com",
      description: "A common place for developers",
      visits: 0,
    },
  ],
};

const countReducer = (state, action) => {
  if (action.type === "VISITS") {
    let updatedItems;
    updatedItems = [...state.items];

    console.log("updated items", updatedItems);

    updatedItems.forEach((element) => {
      console.log(element);
      countapi
        .hit(element.name, "1ccb732e-b55a-4404-ad3f-0f99c02fe44e")
        .then((res) => {
          element.visits = res.value;
        });
    });

    return {
      items: updatedItems,
    };
  }

  return deafultCountState;
};

const CounterWebsites = () => {
  const [countState, dispatchCountAction] = useReducer(
    countReducer,
    deafultCountState
  );

  const countWebsiteButtonHandler = () => {
    dispatchCountAction({ type: "VISITS" });
  };

  useEffect(() => {
    dispatchCountAction({ type: "VISITS" });
  }, []);

  return (
    <WebsiteSection>
      <div style={{ width: "100%" }}>
        <h2
          style={{
            color: "white",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          Click the cow to get website data
        </h2>
        <CowButton onClick={countWebsiteButtonHandler}>
          <img
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
            }}
            width={100}
            src={CowImage}
            alt="cow"
          ></img>
        </CowButton>
      </div>
      <Grid container spacing={2}>
        {countState.items.map((item) => (
          <CounterItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            type={item.type}
            visits={item.visits}
          ></CounterItem>
        ))}
      </Grid>
    </WebsiteSection>
  );
};

const fadeIn = keyframes`
from {
    opacity: 0;
    transform: translateY(3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const WebsiteSection = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: ${fadeIn} 1s ease-out forwards;
`;

const CowButton = styled.button`
  width: 200px;
  margin-left: 40%;
  cursor: pointer;
  font: inherit;
  border: 1px solid #4f005f;
  color: purple;
  padding: 0.75rem 3.5rem;
  cursor: pointer;
  margin-bottom: 1rem;
  border-radius: 30px;
  border: 2px solid magenta;
  background: black;
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

export default CounterWebsites;
