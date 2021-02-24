import { moodTrackerApi } from './core';
import { UserRequest } from '../store/user/types';

export async function authenticateUser(payload: UserRequest): Promise<any> {
  return await moodTrackerApi.post('/auth/login', payload);
}
