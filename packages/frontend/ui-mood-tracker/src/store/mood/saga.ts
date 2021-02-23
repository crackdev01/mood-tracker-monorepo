import { all, call, put, takeEvery, fork } from 'redux-saga/effects';

import { MoodActions } from './types';
import { getMoodEntries, postMoodEntry, updateMoodEntry, deleteMoodEntry } from '../../api/mood';

// FIXME: update types in file.

// Fetch mood entries.
export function* getMoodEntriesCall() {
  const { data } = yield call(getMoodEntries);
  yield put({ type: MoodActions.RENDER_MOODS, data });
}

export function* getMoods() {
  yield takeEvery(MoodActions.FETCH_MOODS, getMoodEntriesCall);
}

// Add mood entry.
export function* addMoodEntryCall(action: any) {
  yield call(postMoodEntry, action.payload);
  yield call(getMoodEntriesCall);
}

export function* addMoodEntry() {
  yield takeEvery(MoodActions.ADD_MOOD, addMoodEntryCall);
}

// Update mood entry.
export function* editMoodEntryCall(action: any) {
  yield call(updateMoodEntry, action.payload);
  yield call(getMoodEntriesCall);
}

export function* editMoodEntry() {
  yield takeEvery(MoodActions.EDIT_MOOD, editMoodEntryCall);
}

// Delete mood entry.
export function* removeMoodEntryCall(action: any) {
  yield call(deleteMoodEntry, action.payload);
  yield call(getMoodEntriesCall);
}

export function* removeMoodEntry() {
  yield takeEvery(MoodActions.DELETE_MOOD, removeMoodEntryCall);
}

export function* moodSaga() {
  yield all([fork(getMoods), fork(addMoodEntry), fork(editMoodEntry), fork(removeMoodEntry)]);
}

export default moodSaga;
