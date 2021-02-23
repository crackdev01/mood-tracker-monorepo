import { expectSaga, testSaga } from 'redux-saga-test-plan';

import userSaga, { loadUser, loginUser } from '../../../../store/user/saga';
import { authenticateUser } from '../../../../api/user';
import { mockUser } from '../../../fixtures';
import { UserActions } from '../../../../store/user/types';

describe('userSaga', () => {
  test('loadUser', () => {
    testSaga(loadUser)
      .next()
      .takeEvery(UserActions.FETCH_USER, loginUser)
      .finish()
      .isDone();
  });

  test('loginUser', () => {
    const action = {
      payload: {
        username: 'mock-user',
        password: 'password',
      },
    };
    return expectSaga(loginUser, action)
      .provide({
        call(effect, fn) {
          if (effect.fn === authenticateUser) {
            return { data: { accessToken: mockUser.accessToken } };
          }
        },
      })
      .put({ type: UserActions.RENDER_USER, data: mockUser })
      .run();
  });
});
