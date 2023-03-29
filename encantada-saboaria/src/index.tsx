import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./constants/Theme";
import GlobalState from "./Global/GlobalState";
import { customTheme } from "./constants/CustomThemeChakra";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={customTheme}>
        <GlobalState>
          <App />
        </GlobalState>
      </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
