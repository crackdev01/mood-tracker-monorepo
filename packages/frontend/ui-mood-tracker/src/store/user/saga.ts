import { all, call, put, takeEvery, fork } from 'redux-saga/effects';
import jwt_decode from 'jwt-decode';

import { User, UserActions } from './types';
import { authenticateUser } from '../../api/user';

export function* loginUser(action: any) {
  const { data } = yield call(authenticateUser, action.payload);
  const user: User = {
    accessToken: data.accessToken,
    decodedAccessToken: jwt_decode(data.accessToken),
  };
  yield put({ type: UserActions.RENDER_USER, data: user });
}

export function* loadUser() {
  yield takeEvery(UserActions.FETCH_USER, loginUser);
}

export function* userSaga() {
  yield all([fork(loadUser)]);
}

export default userSaga;
