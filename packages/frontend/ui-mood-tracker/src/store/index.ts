import { createStore } from 'redux';

import { mood } from './mood/reducers';
import { MoodState } from './mood/types';

export interface ApplicationState {
  mood: MoodState;
}

const store = createStore(mood);

export default store;
