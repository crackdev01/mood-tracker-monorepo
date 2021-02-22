import { moodTrackerApi } from './core';

export async function authenticateUser(): Promise<any> {
  return await moodTrackerApi.post('/auth/login', { username: 'testuser', password: 'password' });
}
