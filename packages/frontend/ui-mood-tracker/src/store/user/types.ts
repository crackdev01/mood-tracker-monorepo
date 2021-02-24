export interface UserRequest {
  username: string;
  password: string;
}

export interface Jwt {
  exp: number;
  iat: number;
  username: string;
  uuid: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface User {
  accessToken: string;
  decodedAccessToken: Jwt | null;
  // We set the coordinate values if user has provided permission.
  // Else we set to false.
  location?: Coordinates | string;
}

// Define User Store State.
export interface UserState {
  user: User;
}

// Define User Store actions.
export enum UserActions {
  FETCH_USER = 'FETCH_USER',
  RENDER_USER = 'RENDER_USER',
  LOGOUT_USER = 'LOGOUT_USER',
  SET_LOCATION_SUCCESS = 'SET_LOCATION_SUCCESS',
  SET_LOCATION_DENIED = 'SET_LOCATION_DENIED',
  SET_LOCATION_ERROR = 'SET_LOCATION_ERROR',
}
