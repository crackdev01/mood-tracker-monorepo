import { moodTrackerApi } from './core';

export async function getMoodEntriesApi(): Promise<any> {
  return await moodTrackerApi.get('/mood/entries');
}

export async function postMoodEntry(payload: any): Promise<void> {
  return await moodTrackerApi.post('/mood/entry', payload);
}

export async function editMoodEntry(payload: any): Promise<void> {
  return await moodTrackerApi.put('/mood/entry', payload);
}

export async function deleteMoodEntry(payload: any): Promise<void> {
  return await moodTrackerApi.delete('/mood/entry', payload);
}
