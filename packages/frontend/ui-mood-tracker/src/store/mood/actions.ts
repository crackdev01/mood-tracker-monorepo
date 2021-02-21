import { MoodActions } from './types';

export const fetchMoodEntries = () => {
  return {
    type: MoodActions.FETCH_MOODS,
  };
};

export const renderMoodEntries = (mood: any) => {
  return {
    type: MoodActions.RENDER_MOODS,
    mood,
  };
};
