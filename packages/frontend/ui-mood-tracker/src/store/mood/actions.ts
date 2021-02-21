import { MoodActions } from './types';

import { getMoodEntries } from '../../api/mood';

const fetchMoodEntries = (mood: any) => {
  return {
    type: MoodActions.FETCH_MOODS,
    mood,
  };
};

export const retrieveMoods = () => {
  return async (dispatch: any) => {
    try {
      const moodEntries = await getMoodEntries();
      dispatch(fetchMoodEntries(moodEntries));
    } catch (e) {
      console.error(e);
    }
  };
};
