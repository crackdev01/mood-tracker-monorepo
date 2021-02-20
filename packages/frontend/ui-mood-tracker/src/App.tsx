import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SiteHeader from './components/SiteHeader';

import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
    </BrowserRouter>
  );
}

export default App;
