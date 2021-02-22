// FIXME: update types.
// Define Mood Store State.
export interface MoodState {
  mood: [];
}

// Define Mood Store actions.
export enum MoodActions {
  FETCH_MOODS = 'FETCH_MOODS',
  ADD_MOOD = 'ADD_MOOD',
  EDIT_MOOD = 'EDIT_MOOD',
  DELETE_MOOD = 'DELETE_MOOD',
  RENDER_MOODS = 'RENDER_MOODS',
}
