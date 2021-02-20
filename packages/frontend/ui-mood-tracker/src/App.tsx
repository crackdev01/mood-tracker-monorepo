import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SiteHeader from './components/SiteHeader';

import Login from './containers/login/Login';

import './App.scss';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <BrowserRouter>
      <SiteHeader />

      <Login />
    </BrowserRouter>
  );
}

export default App;
