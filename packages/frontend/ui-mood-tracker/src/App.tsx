import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import SiteHeader from './components/site-header/SiteHeader';

import Login from './containers/login/Login';
import MoodEntry from './containers/mood-entry/MoodEntry';
import Statistics from './containers/statistics/Statistics';

import configureStore from './store';

import './App.scss';
import 'semantic-ui-css/semantic.min.css';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
