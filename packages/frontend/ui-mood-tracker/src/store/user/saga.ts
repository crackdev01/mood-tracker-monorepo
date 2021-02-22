import { all, call, put, takeEvery, fork } from 'redux-saga/effects';

import { UserActions } from './types';
import { authenticateUser } from '../../api/user';

export function* loginUser(action: any) {
  const { data } = yield call(authenticateUser, action.payload);
  yield put({ type: UserActions.RENDER_USER, data });
}

export function* loadUser() {
  yield takeEvery(UserActions.FETCH_USER, loginUser);
}

export function* userSaga() {
  yield all([fork(loadUser)]);
}

export default userSaga;
