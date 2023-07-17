import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`

  :root{
    --backgroundLogo:"#00033D" 
    --letterLogo:"#FFC600"
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    background-color:white;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
  }
`;
 
export default GlobalStyle