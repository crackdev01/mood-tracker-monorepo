import { userState } from '../../../../store/user/state';

describe('userState', () => {
  test('default', () => {
    expect(userState).toEqual({
      user: {
        accessToken: '',
        decodedAccessToken: null,
      },
    });
  });
});
