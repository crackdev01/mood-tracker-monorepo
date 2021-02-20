import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SiteHeader from 'src/components/SiteHeader';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
    </BrowserRouter>
  );
}

export default App;
