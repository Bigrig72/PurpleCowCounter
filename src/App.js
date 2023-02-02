import React, { useState } from "react";
import AnimateText from "./Components/animations/TextAnimation";
import Header from "./Components/UI/Header";

function App() {
  const [enterApp, setEnterApp] = useState(false);

  const enterAppHandler = () => {
    setEnterApp(true);
  };

  return (
    <>
      <div>
        {!enterApp && <AnimateText enterApp={enterAppHandler}></AnimateText>}
        {enterApp && <Header></Header>}
      </div>
    </>
  );
}

export default App;
