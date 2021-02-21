import { all, call, put, takeEvery, fork } from 'redux-saga/effects';

import { MoodActions } from './types';
import { getMoodEntriesApi } from 'src/api/mood';

// @ts-ignore
export function* getMoodEntries() {
  const { data } = yield call(getMoodEntriesApi);
  yield put({ type: MoodActions.RENDER_MOODS, data });
}

export function* loadMoodEntries() {
  yield takeEvery(MoodActions.FETCH_MOODS, getMoodEntries);
}

export function* moodSaga() {
  yield all([fork(loadMoodEntries)]);
}

export default moodSaga;
