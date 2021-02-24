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
    mood_id: 1,
    mood_status: 'confident',
    mood_intensity: 1,
  },
  {
    mood_id: 2,
    mood_status: 'curious',
    mood_intensity: 0,
  },
  {
    mood_id: 3,
    mood_status: 'energetic',
    mood_intensity: 3,
  },
  {
    mood_id: 4,
    mood_status: 'relaxed',
    mood_intensity: 4,
  },
  {
    mood_id: 5,
    mood_status: 'motivated',
    mood_intensity: 2,
  },
  {
    mood_id: 6,
    mood_status: 'motivated',
    mood_intensity: 1,
  },
  {
    mood_id: 7,
    mood_status: 'energetic',
    mood_intensity: 2,
  },
  {
    mood_id: 8,
    mood_status: 'curious',
    mood_intensity: 3,
  },
];
