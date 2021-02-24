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
      user: mockUser,
    });
  });

  test(UserActions.SET_LOCATION_SUCCESS, () => {
    const action = {
      type: UserActions.SET_LOCATION_SUCCESS,
      data: 'mock-location',
    };
    expect(user(userState, action)).toEqual({
      user: {
        accessToken: '',
        decodedAccessToken: null,
        location: 'mock-location',
      },
    });
  });

  test(UserActions.SET_LOCATION_DENIED, () => {
    const action = {
      type: UserActions.SET_LOCATION_DENIED,
    };
    expect(user(userState, action)).toEqual({
      user: {
        accessToken: '',
        decodedAccessToken: null,
        location: UserActions.SET_LOCATION_DENIED,
      },
    });
  });

  test(UserActions.SET_LOCATION_ERROR, () => {
    const action = {
      type: UserActions.SET_LOCATION_ERROR,
    };
    expect(user(userState, action)).toEqual({
      user: {
        accessToken: '',
        decodedAccessToken: null,
        location: UserActions.SET_LOCATION_ERROR,
      },
    });
  });

  test(UserActions.LOGOUT_USER, () => {
    const action = {
      type: UserActions.LOGOUT_USER,
    };
    expect(user(userState, action)).toEqual(userState);
  });

  test('default', () => {
    const action = {
      type: 'UNDEFINED_USER_ACTION',
    };
    expect(user(userState, action)).toEqual(userState);
  });
});
