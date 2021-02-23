import { UserRequest, UserActions } from './types';

export const fetchUser = (payload: UserRequest) => {
  return {
    type: UserActions.FETCH_USER,
    payload,
  };
};

// FIXME: update types.
export const renderUser = (payload: any) => {
  return {
    type: UserActions.RENDER_USER,
    payload,
  };
};

const logoutUser = () => {
  return {
    type: UserActions.LOGOUT_USER,
  }
}
