import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

  :root{
    --logo:#00033D
    --letter-logo:#FFC600
  }

  body {
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    background-color:white;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
  }
`;
