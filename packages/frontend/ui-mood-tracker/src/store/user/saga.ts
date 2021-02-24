import { all, call, put, takeEvery, fork } from 'redux-saga/effects';
import jwt_decode from 'jwt-decode';

import { User, UserActions } from './types';
import { userState } from './state';
import { authenticateUser } from '../../api/user';

export function* loginUserCall(action: any) {
  const { data } = yield call(authenticateUser, action.payload);
  const user: User = {
    accessToken: data.accessToken,
    decodedAccessToken: jwt_decode(data.accessToken),
  };
  yield put({ type: UserActions.RENDER_USER, data: user });
}

export function* loginUser() {
  yield takeEvery(UserActions.FETCH_USER, loginUserCall);
}

export function* setUserLocationSuccessCall(action: any) {
  const { location } = action.payload;
  yield put({ type: UserActions.RENDER_USER, data: location });
}

export function* setUserLocationSuccess() {
  yield takeEvery(UserActions.SET_LOCATION_SUCCESS, setUserLocationSuccessCall);
}

export function* setUserLocationErrorCall() {
  const location = UserActions.SET_LOCATION_ERROR;
  yield put({ type: UserActions.RENDER_USER, data: location });
}

export function* setUserLocationError() {
  yield takeEvery(UserActions.SET_LOCATION_ERROR, setUserLocationErrorCall);
}

export function* setUserLocationDeniedCall() {
  const location = UserActions.SET_LOCATION_DENIED;
  yield put({ type: UserActions.RENDER_USER, data: location });
}

export function* setUserLocationDenied() {
  yield takeEvery(UserActions.SET_LOCATION_DENIED, setUserLocationDeniedCall);
}

export function* logoutUserCall() {
  // Reset use store to default state to trigger logout.
  yield put({ type: UserActions.RENDER_USER, data: userState });
}

export function* logoutUser() {
  yield takeEvery(UserActions.LOGOUT_USER, logoutUserCall);
}

export function* userSaga() {
  yield all([fork(loginUser), fork(logoutUser)]);
}

export default userSaga;
