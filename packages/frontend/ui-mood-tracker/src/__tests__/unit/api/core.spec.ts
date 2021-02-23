import { moodTrackerApi } from '../../../api/core';

describe('core', () => {
  test('githubApi', () => {
    expect(moodTrackerApi.defaults).toMatchObject({
      baseURL: 'http://localhost:3000',
      timeout: 10000,
    });
  });
});
