import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { MoodActions } from '../../store/mood/types';
import Login from '../login/Login';
import MoodEntry from '../mood-entry/MoodEntry';
import Statistics from '../statistics/Statistics';
import SiteHeader from '../../components/site-header/SiteHeader';
import LocationModal from '../../components/location/LocationModal';

import './home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const [coordinates, setCoordinates] = useState({ lat: 0, long: 0 });

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

  useEffect(() => {
    dispatch({
      type: MoodActions.FETCH_MOODS,
    });
    // TODO: setup user module and dispatch action to fetch coordinates from there.
    // loadLocation();
  });

  return (
    <BrowserRouter>
      <SiteHeader coordinates={coordinates} />

      <LocationModal />

      <article className="app-content">
        <Switch>
          <Route path="/">
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
