import { all, call, put, takeEvery, fork } from 'redux-saga/effects';

import { UserActions } from './types';
import { authenticateUser } from '../../api/user';

export function* loginUser() {
  const { data } = yield call(authenticateUser);
  yield put({ type: UserActions.RENDER_USER, data });
}

export function* loadUser() {
  yield takeEvery(UserActions.FETCH_USER, loginUser);
}

export function* userSaga() {
  yield all([fork(loadUser)]);
}

export default userSaga;
