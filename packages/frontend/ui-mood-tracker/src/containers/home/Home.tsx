import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProtectedRoute from '../../components/ProtectedRoute';
import Login from '../login/Login';
import MoodEntry from '../mood-entry/MoodEntry';
import Statistics from '../statistics/Statistics';
import SiteHeader from '../../components/site-header/SiteHeader';
import { ApplicationState } from '../../store';
import { MoodActions } from '../../store/mood/types';

import './home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: ApplicationState) => state.userReducer.user);

  const isAuthenticated = !!user.accessToken;

  const triggerFetchMoodEntries = () => {
    if (user.accessToken) {
      dispatch({
        type: MoodActions.FETCH_MOODS,
      });
    }
  };

  useEffect(() => {
    triggerFetchMoodEntries();
  }, [user]);

  return (
    <BrowserRouter>
      <SiteHeader />

      <article className="app-content">
        <Switch>
          <Route exact path="/">
            {isAuthenticated && <MoodEntry />}
            {!isAuthenticated && <Login />}
          </Route>
          <ProtectedRoute
            path="/mood-entry"
            isAuthenticated={isAuthenticated}
            component={MoodEntry}
          />
          <ProtectedRoute
            path="/statistics"
            isAuthenticated={isAuthenticated}
            component={Statistics}
          />
        </Switch>
      </article>
    </BrowserRouter>
  );
};

export default Home;
