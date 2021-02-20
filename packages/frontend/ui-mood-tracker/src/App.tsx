import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SiteHeader from './components/SiteHeader';

import Login from './containers/login/Login';
import MoodEntry from './containers/mood-entry/MoodEntry';
import Statistics from './containers/statistics/Statistics';

import './App.scss';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <BrowserRouter>
      <SiteHeader />

      <article className="app-content">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/mood-entry">
            <MoodEntry />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
        </Switch>
      </article>
    </BrowserRouter>
  );
}

export default App;
