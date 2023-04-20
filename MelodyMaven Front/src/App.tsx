import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/router';
import { GlobalStyle } from './components/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </div>
  );
}

export default App;
