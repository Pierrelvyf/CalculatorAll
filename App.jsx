import React from "react";
import GlobalStyle from "./styles/Global";
import Calculator from "./components/calculator";
import "./App.css";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Calculator />
    </>
  );
};

export default App;
