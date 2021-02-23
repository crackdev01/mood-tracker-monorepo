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

export interface User {
  accessToken: string;
  decodedAccessToken: Jwt | null;
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
}
