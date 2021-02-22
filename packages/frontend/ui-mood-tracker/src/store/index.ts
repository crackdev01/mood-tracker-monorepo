import { applyMiddleware, combineReducers, createStore } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { mood as moodReducer } from './mood/reducers';
import moodSaga from './mood/saga';

import { user as userReducer } from './user/reducers';
import userSaga from './user/saga';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const reducers = combineReducers({ userReducer, moodReducer });
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(userSaga);
  sagaMiddleware.run(moodSaga);
  return store;
};

export default configureStore;
