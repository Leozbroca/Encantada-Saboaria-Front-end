import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from './routes/Router';
import GlobalStyle from './constants/GlobalStyled';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <BrowserRouter>
        <Header/>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
