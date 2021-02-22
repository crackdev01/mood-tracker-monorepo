import { UserActions } from './types';

export const fetchUser = () => {
  return {
    type: UserActions.FETCH_USER,
  };
};

export const renderUser = (user: any) => {
  return {
    type: UserActions.RENDER_USER,
    user,
  };
};
