import { moodTrackerApi } from './core';

// FIXME: update types.
export async function getMoodEntries(): Promise<any> {
  return await moodTrackerApi.get('/mood/entries');
}

export async function postMoodEntry(payload: any): Promise<void> {
  return await moodTrackerApi.post('/mood/entry', payload);
}

export async function updateMoodEntry(payload: any): Promise<void> {
  return await moodTrackerApi.put('/mood/entry', payload);
}

export async function deleteMoodEntry(payload: any): Promise<void> {
  return await moodTrackerApi.delete(`/mood/entry/${payload.id}`);
}
