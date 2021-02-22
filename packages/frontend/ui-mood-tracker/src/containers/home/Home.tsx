import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import ProtectedRoute from '../../components/ProtectedRoute';
import Login from '../login/Login';
import MoodEntry from '../mood-entry/MoodEntry';
import Statistics from '../statistics/Statistics';
import SiteHeader from '../../components/site-header/SiteHeader';
import LocationModal from '../../components/location/LocationModal';
import { MoodActions } from '../../store/mood/types';
import { ApplicationState } from '../../store';

import './home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const [coordinates, setCoordinates] = useState({ lat: 0, long: 0 });
  const user = useSelector((state: ApplicationState) => state.userReducer.user);

  const loadLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>
        setCoordinates({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        })
      );
    }
  };

  const isAuthenticated = !!user.uuid;

  useEffect(() => {
    dispatch({
      type: MoodActions.FETCH_MOODS,
    });
    // TODO: setup user module and dispatch action to fetch coordinates from there.
    // loadLocation();
  }, [user]);

  return (
    <BrowserRouter>
      <SiteHeader coordinates={coordinates} />

      <LocationModal />

      <article className="app-content">
        <Switch>
          <Route path="/login">
            <Login />
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
