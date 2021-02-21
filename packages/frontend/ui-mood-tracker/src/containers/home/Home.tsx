import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { MoodActions } from '../../store/mood/types';
import Login from '../login/Login';
import MoodEntry from '../mood-entry/MoodEntry';
import Statistics from '../statistics/Statistics';
import SiteHeader from '../../components/site-header/SiteHeader';

import './home.scss';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: MoodActions.FETCH_MOODS,
    });
  });

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
};

export default Home;
