import { moodTrackerApi } from './core';
import { AuthReq } from '../store/user/types';

export async function authenticateUser(payload: AuthReq): Promise<any> {
  return await moodTrackerApi.post('/auth/login', payload);
}
