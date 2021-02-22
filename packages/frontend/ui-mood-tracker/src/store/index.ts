import { applyMiddleware, combineReducers, createStore } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { mood as moodReducer } from './mood/reducers';
import moodSaga from './mood/saga';

import { user } from './user/reducers';
import userSaga from './user/saga';
import { UserState } from './user/types';
import { MoodState } from './mood/types';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const sagaMiddleware = createSagaMiddleware();

export interface ApplicationState {
  userReducer: UserState;
  moodReducer: MoodState;
}

const configureStore = () => {
  const userReducer = persistReducer(persistConfig, user);
  const reducers = combineReducers({ userReducer, moodReducer });
  const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));
  sagaMiddleware.run(userSaga);
  sagaMiddleware.run(moodSaga);
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
