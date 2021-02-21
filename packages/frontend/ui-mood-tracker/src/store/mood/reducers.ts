import { moodState } from './state';
import { MoodActions } from './types';

export const mood = (state = moodState, action: any) => {
  switch (action.type) {
    case MoodActions.FETCH_MOODS:
      return {
        ...state,
        mood: action.mood,
      };
    default:
      return state;
  }
};
