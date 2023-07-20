import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { GlobalStyle } from "./constants/GlobalStyled";
import { ThemeProvider } from "@mui/material";
import { theme } from "./constants/Theme";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "./constants/CustomThemeChakra";
import GlobalState from "./Global/GlobalState";

function App() {
  return (
    <>
    <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <ChakraProvider theme={customTheme}>
          <GlobalState>
            <BrowserRouter>
              <Header />
              <Router />
              <Footer />
            </BrowserRouter>
          </GlobalState>
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
