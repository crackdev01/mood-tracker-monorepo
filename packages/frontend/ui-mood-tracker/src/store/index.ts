import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { mood as moodReducer } from './mood/reducers';
import moodSaga from './mood/saga';

import { user as userReducer } from './user/reducers';
import userSaga from './user/saga';
import { UserState } from './user/types';
import { MoodState } from './mood/types';

const sagaMiddleware = createSagaMiddleware();

export interface ApplicationState {
  userReducer: UserState;
  moodReducer: MoodState;
}

const configureStore = () => {
  const reducers = combineReducers({ userReducer, moodReducer });
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(userSaga);
  sagaMiddleware.run(moodSaga);
  return store;
};

export default configureStore;
