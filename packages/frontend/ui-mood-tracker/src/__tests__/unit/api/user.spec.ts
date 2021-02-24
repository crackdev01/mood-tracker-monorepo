import { moodTrackerApi } from '../../../api/core';
import { authenticateUser } from '../../../api/user';

jest.mock('../../../api/core', () => require('./core.mock'));

describe('users api', () => {
  test('authenticateUser', async () => {
    (moodTrackerApi.post as jest.Mock).mockResolvedValueOnce({});
    const payload = {
      username: 'mock-user',
      password: 'password',
    };
    await authenticateUser(payload);
    expect(moodTrackerApi.post).toHaveBeenCalledWith('/auth/login', payload);
  });
});
