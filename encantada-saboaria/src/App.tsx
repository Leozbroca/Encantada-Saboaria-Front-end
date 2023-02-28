import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from './routes/Router';
import GlobalStyle from './constants/GlobalStyled';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <BrowserRouter>
        <Header/>
        <Router/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
