import { moodTrackerApi } from './core';
import { UserReq } from '../store/user/types';

export async function authenticateUser(payload: UserReq): Promise<any> {
  return await moodTrackerApi.post('/auth/login', payload);
}
