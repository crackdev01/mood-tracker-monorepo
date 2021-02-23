import { UserRequest, UserActions } from './types';

// FIXME: This should not require any payload.
export const fetchUser = (payload: UserRequest) => {
  return {
    type: UserActions.FETCH_USER,
    payload,
  };
};

export const renderUser = (payload: any) => {
  return {
    type: UserActions.RENDER_USER,
    payload,
  };
};
