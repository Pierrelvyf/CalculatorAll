import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #0d0c1d;
    color:rgb(0, 0, 0);
    font-size: 1.6rem;
    line-height: 1.5;
  }
`;

export default GlobalStyle;
