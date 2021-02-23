import {fetchUser, logoutUser, renderUser} from '../../../../store/user/actions';
import { UserActions } from '../../../../store/user/types';

describe('user store', () => {
  test('fetchUser', () => {
    const payload = {
      username: 'mock-user',
      password: 'password',
    };
    expect(fetchUser(payload)).toEqual({
      type: UserActions.FETCH_USER,
      payload,
    });
  });

  test('renderUser', () => {
    const payload = {
      username: 'mock-user',
      uuid: 'mock-uuid',
    };
    expect(renderUser(payload)).toEqual({
      type: UserActions.RENDER_USER,
      payload,
    });
  });

  test('logoutUser', () => {
    expect(logoutUser()).toEqual({
      type: UserActions.LOGOUT_USER,
    });
  });
});
