import { moodTrackerApi } from './core';

export async function getMoodEntriesApi(): Promise<any> {
  return await moodTrackerApi.get('/mood/entries');
}
