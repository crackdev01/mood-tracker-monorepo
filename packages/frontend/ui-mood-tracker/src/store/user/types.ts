// Define User Store State.
export interface UserState {
  user: any;
}

export interface AuthReq {
  username: string;
  password: string;
}

// Define User Store actions.
export enum UserActions {
  FETCH_USER = 'FETCH_USER',
  RENDER_USER = 'RENDER_USER',
}
