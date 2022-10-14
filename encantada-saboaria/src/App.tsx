import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from './routes/Router';
import GlobalStyle from './constants/GlobalStyled';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
