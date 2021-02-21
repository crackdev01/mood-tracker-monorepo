import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { mood as moodReducer } from './mood/reducers';
import { moodState } from './mood/state';
import { MoodState } from './mood/types';
import moodSaga from './mood/saga';

const sagaMiddleware = createSagaMiddleware();

export interface ApplicationState {
  mood: MoodState;
}

const configureStore = () => {
  const store = createStore(moodReducer, moodState, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(moodSaga);
  return store;
};

export default configureStore;
