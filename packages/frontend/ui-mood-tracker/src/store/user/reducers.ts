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
    case UserActions.SET_LOCATION_DENIED:
      return {
        ...state,
        user: {
          ...state.user,
          location: UserActions.SET_LOCATION_DENIED,
        },
      };
    case UserActions.SET_LOCATION_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          location: UserActions.SET_LOCATION_ERROR,
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
