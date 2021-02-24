import { expectSaga, testSaga } from 'redux-saga-test-plan';

import {
  loginUser,
  loginUserCall,
  logoutUser,
  logoutUserCall,
} from '../../../../store/user/saga';
import { authenticateUser } from '../../../../api/user';
import { mockUser } from '../../../fixtures';
import { UserActions } from '../../../../store/user/types';
import { userState } from '../../../../store/user/state';

describe('userSaga', () => {
  describe('action mappers', () => {
    test('loginUser', () => {
      testSaga(loginUser).next().takeEvery(UserActions.FETCH_USER, loginUserCall).finish().isDone();
    });

    test('logoutUser', () => {
      testSaga(logoutUser)
        .next()
        .takeEvery(UserActions.LOGOUT_USER, logoutUserCall)
        .finish()
        .isDone();
    });
  });

  describe('api mappers', () => {
    test('loginUserCall', () => {
      const action = {
        payload: {
          username: 'mock-user',
          password: 'password',
        },
      };
      return expectSaga(loginUserCall, action)
        .provide({
          call(effect) {
            if (effect.fn === authenticateUser) {
              return { data: { accessToken: mockUser.accessToken } };
            }
          },
        })
        .put({ type: UserActions.RENDER_USER, data: mockUser })
        .run();
    });

    test('logoutUserCall', () => {
      return expectSaga(logoutUserCall)
        .put({ type: UserActions.RENDER_USER, data: userState })
        .run();
    });
  });
});
