import { moodTrackerApi } from '../../../api/core';
import {
  getMoodEntries,
  postMoodEntry,
  updateMoodEntry,
  deleteMoodEntry,
} from '../../../api/mood';

jest.mock('../../../api/core', () => require('./core.mock'));

describe('mood api', () => {
  test('getMoodEntries', async () => {
    (moodTrackerApi.get as jest.Mock).mockResolvedValueOnce({});
    await getMoodEntries();
    expect(moodTrackerApi.get).toHaveBeenCalledWith('/mood/entries');
  });

  test('postMoodEntry', async () => {
    (moodTrackerApi.post as jest.Mock).mockResolvedValueOnce({});
    const payload = {
      user: 'mock-uuid',
      status: 'confident',
      intensity: 0,
    };
    await postMoodEntry(payload);
    expect(moodTrackerApi.post).toHaveBeenCalledWith('/mood/entry', payload);
  });

  test('updateMoodEntry', async () => {
    (moodTrackerApi.put as jest.Mock).mockResolvedValueOnce({});
    const payload = {
      id: 5,
      status: 'curious',
      intensity: 4,
    };
    await updateMoodEntry(payload);
    expect(moodTrackerApi.put).toHaveBeenCalledWith('/mood/entry', payload);
  });

  test('deleteMoodEntry', async () => {
    (moodTrackerApi.delete as jest.Mock).mockResolvedValueOnce({});
    await deleteMoodEntry({ id: 5 });
    expect(moodTrackerApi.delete).toHaveBeenCalledWith('/mood/entry/5');
  });
});
