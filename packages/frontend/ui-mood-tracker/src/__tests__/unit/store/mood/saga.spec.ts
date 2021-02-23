import { expectSaga, testSaga } from 'redux-saga-test-plan';

import
  moodSaga,
  {
    getMoods,
    getMoodEntriesCall,
    addMoodEntry,
    addMoodEntryCall,
    editMoodEntry,
    editMoodEntryCall,
    removeMoodEntry,
    removeMoodEntryCall,
  } from '../../../../store/mood/saga';
import {
  getMoodEntries,
  postMoodEntry,
  updateMoodEntry,
  deleteMoodEntry,
} from '../../../../api/mood';
import { mockMoods } from '../../../fixtures';
import { MoodActions } from '../../../../store/mood/types';

describe('moodSaga', () => {
  describe('action mappers', () => {
    test('getMoods', () => {
      testSaga(getMoods)
        .next()
        .takeEvery(MoodActions.FETCH_MOODS, getMoodEntriesCall)
        .finish()
        .isDone();
    });

    test('addMoodEntry', () => {
      testSaga(addMoodEntry)
        .next()
        .takeEvery(MoodActions.ADD_MOOD, addMoodEntryCall)
        .finish()
        .isDone();
    });

    test('editMoodEntry', () => {
      testSaga(editMoodEntry)
        .next()
        .takeEvery(MoodActions.EDIT_MOOD, editMoodEntryCall)
        .finish()
        .isDone();
    });

    test('removeMoodEntry', () => {
      testSaga(removeMoodEntry)
        .next()
        .takeEvery(MoodActions.DELETE_MOOD, removeMoodEntryCall)
        .finish()
        .isDone();
    });
  });

  describe('api mappers', () => {
    test('getMoodEntriesCall', () => {
      return expectSaga(getMoodEntriesCall)
        .provide({
          call(effect) {
            if (effect.fn === getMoodEntries) {
              return { data: mockMoods };
            }
          },
        })
        .put({ type: MoodActions.RENDER_MOODS, data: mockMoods })
        .run();
    });

    test('addMoodEntryCall', () => {
      const action = { payload: mockMoods[0] };
      return expectSaga(addMoodEntryCall, action)
        .provide({
          call(effect) {
            if (effect.fn === postMoodEntry) {
              return { };
            } else if (effect.fn === getMoodEntries) {
              return { data: mockMoods };
            }
          },
        })
        .put({ type: MoodActions.RENDER_MOODS, data: mockMoods })
        .run();
    });

    test('editMoodEntryCall', () => {
      const action = { payload: mockMoods[0] };
      return expectSaga(editMoodEntryCall, action)
        .provide({
          call(effect) {
            if (effect.fn === updateMoodEntry) {
              return { };
            } else if (effect.fn === getMoodEntries) {
              return { data: mockMoods };
            }
          },
        })
        .put({ type: MoodActions.RENDER_MOODS, data: mockMoods })
        .run();
    });

    test('removeMoodEntryCall', () => {
      const action = { payload: mockMoods[0] };
      return expectSaga(removeMoodEntryCall, action)
        .provide({
          call(effect) {
            if (effect.fn === deleteMoodEntry) {
              return { };
            } else if (effect.fn === getMoodEntries) {
              return { data: mockMoods };
            }
          },
        })
        .put({ type: MoodActions.RENDER_MOODS, data: mockMoods })
        .run();
    });
  });
});
