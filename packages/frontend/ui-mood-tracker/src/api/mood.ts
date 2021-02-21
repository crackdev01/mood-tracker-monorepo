import { moodTrackerApi } from './core';

export async function getMoodEntries(): Promise<any> {
  return (await moodTrackerApi.get('/mood/entries')).data;
}
