import { moodState } from '../../../../store/mood/state';

describe('moodState', () => {
  test('default', () => {
    expect(moodState).toEqual({ mood: [] });
  });
});
