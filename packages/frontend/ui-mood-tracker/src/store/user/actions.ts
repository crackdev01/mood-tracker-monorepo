import { UserRequest, UserActions } from './types';

export const fetchUser = (payload: UserRequest) => {
  return {
    type: UserActions.FETCH_USER,
    payload,
  };
};

export const renderUser = (user: any) => {
  return {
    type: UserActions.RENDER_USER,
    user,
  };
};
