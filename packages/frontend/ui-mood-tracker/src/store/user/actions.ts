import { AuthReq, UserActions } from './types';

export const fetchUser = (payload: AuthReq) => {
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
