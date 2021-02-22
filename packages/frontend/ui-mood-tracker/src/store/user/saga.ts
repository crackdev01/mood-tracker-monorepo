import { all, call, put, takeEvery, fork } from 'redux-saga/effects';
import jwt_decode from 'jwt-decode';

import { UserActions } from './types';
import { authenticateUser } from '../../api/user';

// FIXME: update types.
export function* loginUser(action: any) {
  const { data } = yield call(authenticateUser, action.payload);
  yield put({ type: UserActions.RENDER_USER, data: jwt_decode(data.access_token) });
}

export function* loadUser() {
  yield takeEvery(UserActions.FETCH_USER, loginUser);
}

export function* userSaga() {
  yield all([fork(loadUser)]);
}

export default userSaga;
