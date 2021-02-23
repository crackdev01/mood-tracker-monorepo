import { authMoodTrackerApi } from '../../../api/core';
import { getMoodEntries, postMoodEntry, updateMoodEntry, deleteMoodEntry } from '../../../api/mood';

jest.mock('../../../api/core', () => require('./core.mock'));

describe('mood api', () => {
  test('getMoodEntries', async () => {
    (authMoodTrackerApi.get as jest.Mock).mockResolvedValueOnce({});
    await getMoodEntries();
    expect(authMoodTrackerApi.get).toHaveBeenCalledWith('/mood/entries');
  });

  test('postMoodEntry', async () => {
    (authMoodTrackerApi.post as jest.Mock).mockResolvedValueOnce({});
    const payload = {
      user: 'mock-uuid',
      status: 'confident',
      intensity: 0,
    };
    await postMoodEntry(payload);
    expect(authMoodTrackerApi.post).toHaveBeenCalledWith('/mood/entry', payload);
  });

  test('updateMoodEntry', async () => {
    (authMoodTrackerApi.put as jest.Mock).mockResolvedValueOnce({});
    const payload = {
      id: 5,
      status: 'curious',
      intensity: 4,
    };
    await updateMoodEntry(payload);
    expect(authMoodTrackerApi.put).toHaveBeenCalledWith('/mood/entry', payload);
  });

  test('deleteMoodEntry', async () => {
    (authMoodTrackerApi.delete as jest.Mock).mockResolvedValueOnce({});
    await deleteMoodEntry({ id: 5 });
    expect(authMoodTrackerApi.delete).toHaveBeenCalledWith('/mood/entry/5');
  });
});
