import {
  fetchMoodEntries,
  addMoodEntry,
  editMoodEntry,
  deleteMoodEntry,
  renderMoodEntries,
} from '../../../../store/mood/actions';
import { MoodActions } from '../../../../store/mood/types';
import { mockMoods } from '../../../fixtures';

describe('mood store', () => {
  test('fetchMoodEntries', () => {
    expect(fetchMoodEntries()).toEqual({
      type: MoodActions.FETCH_MOODS,
    });
  });

  test('addMoodEntry', () => {
    expect(addMoodEntry()).toEqual({
      type: MoodActions.ADD_MOOD,
    });
  });

  test('editMoodEntry', () => {
    expect(editMoodEntry()).toEqual({
      type: MoodActions.EDIT_MOOD,
    });
  });

  test('deleteMoodEntry', () => {
    expect(deleteMoodEntry()).toEqual({
      type: MoodActions.DELETE_MOOD,
    });
  });

  test('renderMoodEntries', () => {
    expect(renderMoodEntries(mockMoods)).toEqual({
      type: MoodActions.RENDER_MOODS,
      mood: mockMoods,
    });
  });
})
