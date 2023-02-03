import React, { useState } from "react";
import AnimateText from "./Components/Animations/TextAnimation";
import Header from "./Components/UI/Header";
import CounterSummary from "./Components/Counter/CounterSummary";
import CounterWebsites from "./Components/Counter/CounterWebsites";

function App() {
  const [enterApp, setEnterApp] = useState(false);

  const enterAppHandler = () => {
    setEnterApp(true);
  };

  return (
    <>
      <div>
        {!enterApp && <AnimateText enterApp={enterAppHandler}></AnimateText>}
        {enterApp && (
          <>
            <Header></Header>
            <CounterSummary></CounterSummary>
            <CounterWebsites></CounterWebsites>
          </>
        )}
      </div>
    </>
  );
}

export default App;
