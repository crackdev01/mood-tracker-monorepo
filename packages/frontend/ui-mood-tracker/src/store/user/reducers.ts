import { userState } from './state';
import { UserActions } from './types';

export const user = (state = userState, action: any) => {
  switch (action.type) {
    case UserActions.FETCH_USER:
      return {
        ...state,
      };
    case UserActions.RENDER_USER:
      return {
        ...state,
        user: action.data,
      };
    case UserActions.SET_LOCATION_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          location: action.data,
        },
      };
    case UserActions.SET_LOCATION_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          location: 'ERROR_SETTING_LOCATION',
        },
      };
    case UserActions.LOGOUT_USER: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
