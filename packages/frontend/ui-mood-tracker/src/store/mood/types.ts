// Define Mood Store State.
export interface MoodState {
  mood: [];
}

// Define Mood Store actions.
export enum MoodActions {
  FETCH_MOODS = 'FETCH_MOODS',
  RENDER_MOODS = 'RENDER_MOODS',
}
