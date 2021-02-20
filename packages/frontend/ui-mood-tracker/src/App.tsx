import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SiteHeader from './components/SiteHeader';

function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
    </BrowserRouter>
  );
}

export default App;
