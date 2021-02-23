/* eslint-disable max-len */
import { User } from '../../src/store/user/types';

export const mockUser: User = {
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiN2MyZjdiZTYtMzFlNy00MGU3LWFiN2MtMGE1YzI4MGIyZGFlIiwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsImlhdCI6MTYxNDAzMTUxNSwiZXhwIjoxNjE0MDM1MTE1fQ.DwbpxbO2SKcaOqCqGM9Wm50XYUgdRSP1skvc-SiedpI',
  decodedAccessToken: {
    exp: 1614035115,
    iat: 1614031515,
    username: 'testuser',
    uuid: '7c2f7be6-31e7-40e7-ab7c-0a5c280b2dae',
  },
};

export const mockUserPayload = {
  username: 'testuser',
  password: 'password',
};

export const mockMoods: any = [
  {
    id: 1,
    status: 'confident',
    intensity: 1,
  },
  {
    id: 2,
    status: 'curious',
    intensity: 0,
  },
  {
    id: 3,
    status: 'energetic',
    intensity: 3,
  },
  {
    id: 4,
    status: 'relaxed',
    intensity: 4,
  },
  {
    id: 5,
    status: 'motivated',
    intensity: 2,
  },
  {
    id: 6,
    status: 'motivated',
    intensity: 1,
  },
  {
    id: 7,
    status: 'energetic',
    intensity: 2,
  },
  {
    id: 8,
    status: 'curious',
    intensity: 3,
  },
];
