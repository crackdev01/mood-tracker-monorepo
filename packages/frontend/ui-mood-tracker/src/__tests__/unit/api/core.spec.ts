import { moodTrackerApi, authMoodTrackerApi } from '../../../api/core';
import { mockUser } from '../../fixtures';

describe('core', () => {
  const localStorageSpy = jest.spyOn(window.localStorage.__proto__, 'setItem');

  test('moodTrackerApi', () => {
    localStorageSpy.mockReturnValueOnce('');
    expect(moodTrackerApi.defaults).toMatchObject({
      baseURL: 'http://localhost:3000',
      timeout: 10000,
    });
  });

  test('authMoodTrackerApi', () => {
    const userStore = JSON.stringify({
      'persist:root': { user: { accessToken: mockUser.accessToken } },
    });
    localStorageSpy.mockReturnValueOnce(userStore);
    expect(authMoodTrackerApi.defaults).toMatchObject({
      baseURL: 'http://localhost:3000',
      timeout: 10000,
    });
  });
});
