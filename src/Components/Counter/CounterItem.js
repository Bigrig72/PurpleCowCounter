import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const CounterItem = (props) => {
  return (
    <Grid sx={{ width: "50%" }} key={props.id} item>
      <Paper
        elevation={3}
        sx={{
          height: 200,
          background: "black",
          color: "magenta",
          border: "3px solid magenta",
          borderRadius: "30px",
        }}
      >
        <h3 style={{ marginTop: "1rem", textAlign: "center" }}>{props.name}</h3>
        <div
          style={{
            fontStyle: "italic",
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          {props.description}
        </div>
        <div>
          <h2 style={{ textAlign: "center" }}>
            Website Visits Today: {props.visits}
          </h2>
        </div>
      </Paper>
    </Grid>
  );
};

export default CounterItem;
