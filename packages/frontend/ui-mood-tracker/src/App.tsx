import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import Home from './containers/home/Home';

import configureStore from './store';

import './App.scss';
import 'semantic-ui-css/semantic.min.css';

const { store, persistor } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default App;
