import { moodState } from './state';
import { MoodActions } from './types';

export const mood = (state = moodState, action: any) => {
  switch (action.type) {
    case MoodActions.FETCH_MOODS:
      return {
        ...state,
      };
    case MoodActions.ADD_MOOD:
      return {
        ...state,
      };
    case MoodActions.EDIT_MOOD:
      return {
        ...state,
      };
    case MoodActions.DELETE_MOOD:
      return {
        ...state,
      };
    case MoodActions.RENDER_MOODS:
      return {
        ...state,
        mood: action.data,
      };
    default:
      return state;
  }
};
