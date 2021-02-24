import { authMoodTrackerApi } from './core';

// FIXME: update types.
export async function getMoodEntries(): Promise<any> {
  return await authMoodTrackerApi.get('/mood/entries');
}

export async function postMoodEntry(payload: any): Promise<void> {
  return await authMoodTrackerApi.post('/mood/entry', payload);
}

export async function updateMoodEntry(payload: any): Promise<void> {
  return await authMoodTrackerApi.put('/mood/entry', payload);
}

export async function deleteMoodEntry(payload: any): Promise<void> {
  return await authMoodTrackerApi.delete(`/mood/entry/${payload.id}`);
}
