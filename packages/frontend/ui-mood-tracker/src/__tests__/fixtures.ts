import { User } from '../../src/store/user/types';

export const mockUser: User = {
  accessToken: 'mock-access-token',
  decodedAccessToken: {
    exp: 1,
    iat: 1,
    iss: '',
    username: 'mock-user',
    uuid: 'mock-uuid',
  },
};
