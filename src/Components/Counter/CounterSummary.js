import styled from "styled-components";

const CounterSummary = () => {
  return (
    <StyledSection>
      <h2 style={{ fontSize: "2rem", marginTop: "0" }}>Counter API</h2>
      <p>Below you will find common websites and the amount of daily visits.</p>
      <p>
        You will also find at the bottom an option for you to enter a URL and
        see it's visits.
      </p>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  text-align: center;
  max-width: 45rem;
  width: 90%;
  margin: auto;
  margin-top: -10rem;
  position: relative;
  background-color: #383838;
  color: white;
  border-radius: 14px;
  padding: 1rem;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);
`;

export default CounterSummary;
