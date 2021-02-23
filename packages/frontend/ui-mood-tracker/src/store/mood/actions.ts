import { MoodActions } from './types';

export const fetchMoodEntries = () => {
  return {
    type: MoodActions.FETCH_MOODS,
  };
};

export const addMoodEntry = () => {
  return {
    type: MoodActions.ADD_MOOD,
  };
};

export const editMoodEntry = () => {
  return {
    type: MoodActions.EDIT_MOOD,
  };
};

export const deleteMoodEntry = () => {
  return {
    type: MoodActions.DELETE_MOOD,
  };
};

// FIXME: fix type.
export const renderMoodEntries = (mood: any) => {
  return {
    type: MoodActions.RENDER_MOODS,
    mood,
  };
};
