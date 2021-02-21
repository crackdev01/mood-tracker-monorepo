import React from 'react';
import { Provider } from 'react-redux';

import Home from './containers/home/Home';

import configureStore from './store';

import './App.scss';
import 'semantic-ui-css/semantic.min.css';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
