import { mood } from '../../../../store/mood/reducers';
import { MoodActions } from '../../../../store/mood/types';
import { moodState } from '../../../../store/mood/state';
import { mockMoods } from '../../../fixtures';

describe('moodReducer', () => {
  test(MoodActions.FETCH_MOODS, () => {
    const action = {
      type: MoodActions.FETCH_MOODS,
    };
    expect(mood(moodState, action)).toEqual(moodState);
  });

  test(MoodActions.ADD_MOOD, () => {
    const action = {
      type: MoodActions.ADD_MOOD,
    };
    expect(mood(moodState, action)).toEqual(moodState);
  });

  test(MoodActions.EDIT_MOOD, () => {
    const action = {
      type: MoodActions.EDIT_MOOD,
    };
    expect(mood(moodState, action)).toEqual(moodState);
  });

  test(MoodActions.DELETE_MOOD, () => {
    const action = {
      type: MoodActions.DELETE_MOOD,
    };
    expect(mood(moodState, action)).toEqual(moodState);
  });

  test(MoodActions.RENDER_MOODS, () => {
    const action = {
      type: MoodActions.RENDER_MOODS,
      data: mockMoods,
    };
    expect(mood(moodState, action)).toEqual({ mood: mockMoods });
  });

  test('default', () => {
    const action = {
      type: 'UNDEFINED_MOOD_ACTION',
    };
    expect(mood(moodState, action)).toEqual(moodState);
  });
});
