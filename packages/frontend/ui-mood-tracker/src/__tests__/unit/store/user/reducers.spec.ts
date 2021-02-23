import { user } from '../../../../store/user/reducers';
import { UserActions } from '../../../../store/user/types';
import { userState } from '../../../../store/user/state';
import { mockUser } from '../../../fixtures';

describe('userReducer', () => {
  test(UserActions.FETCH_USER, () => {
    const action = {
      type: UserActions.FETCH_USER,
    };
    expect(user(userState, action)).toEqual(userState);
  });

  test(UserActions.RENDER_USER, () => {
    const action = {
      type: UserActions.RENDER_USER,
      data: mockUser,
    };
    expect(user(userState, action)).toEqual({
      user : mockUser,
    });
  });

  test('default', () => {
    const action = {
      type: 'UNDEFINED_USER_ACTION',
    };
    expect(user(userState, action)).toEqual(userState);
  });
});
