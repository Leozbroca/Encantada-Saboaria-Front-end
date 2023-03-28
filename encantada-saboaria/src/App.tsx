import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import GlobalStyle from "./constants/GlobalStyled";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
