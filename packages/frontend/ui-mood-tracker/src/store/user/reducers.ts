import { REHYDRATE } from 'redux-persist';

import { userState } from './state';
import { UserActions } from './types';

export const user = (state = userState, action: any) => {
  switch (action.type) {
    case REHYDRATE:
      console.log(action.payload);
      return {
        ...state,
      };
    case UserActions.FETCH_USER:
      return {
        ...state,
      };
    case UserActions.RENDER_USER:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};
