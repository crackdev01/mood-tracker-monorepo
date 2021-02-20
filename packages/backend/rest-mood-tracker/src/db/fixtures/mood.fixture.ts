import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

import {Intensity, MoodEntity, MoodStatus} from 'src/db/entities/mood.entity';

export const moodFixtures: QueryDeepPartialEntity<MoodEntity>[] = [
  {
    user: '7c2f7be6-31e7-40e7-ab7c-0a5c280b2dae',
    status: MoodStatus.Relaxed,
    intensity: Intensity.Level0,
    enteredAt: new Date(),
  },
  {
    user: '7c2f7be6-31e7-40e7-ab7c-0a5c280b2dae',
    status: MoodStatus.Relaxed,
    intensity: Intensity.Level1,
    enteredAt: new Date(),
  },
  {
    user: '7c2f7be6-31e7-40e7-ab7c-0a5c280b2dae',
    status: MoodStatus.Relaxed,
    intensity: Intensity.Level2,
    enteredAt: new Date(),
  },
  {
    user: '7c2f7be6-31e7-40e7-ab7c-0a5c280b2dae',
    status: MoodStatus.Relaxed,
    intensity: Intensity.Level3,
    enteredAt: new Date(),
  },
  {
    user: '7c2f7be6-31e7-40e7-ab7c-0a5c280b2dae',
    status: MoodStatus.Relaxed,
    intensity: Intensity.Level4,
    enteredAt: new Date(),
  },
  {
    user: '7c2f7be6-31e7-40e7-ab7c-0a5c280b2dae',
    status: MoodStatus.Motivated,
    intensity: Intensity.Level0,
    enteredAt: new Date(),
  },
  {
    user: '7c2f7be6-31e7-40e7-ab7c-0a5c280b2dae',
    status: MoodStatus.Motivated,
    intensity: Intensity.Level1,
    enteredAt: new Date(),
  },
  {
    user: '7c2f7be6-31e7-40e7-ab7c-0a5c280b2dae',
    status: MoodStatus.Energetic,
    intensity: Intensity.Level0,
    enteredAt: new Date(),
  },
  {
    user: '7c2f7be6-31e7-40e7-ab7c-0a5c280b2dae',
    status: MoodStatus.Energetic,
    intensity: Intensity.Level1,
    enteredAt: new Date(),
  },
  {
    user: '7c2f7be6-31e7-40e7-ab7c-0a5c280b2dae',
    status: MoodStatus.Curious,
    intensity: Intensity.Level0,
    enteredAt: new Date(),
  },
  {
    user: '7c2f7be6-31e7-40e7-ab7c-0a5c280b2dae',
    status: MoodStatus.Curious,
    intensity: Intensity.Level1,
    enteredAt: new Date(),
  },
  {
    user: '7c2f7be6-31e7-40e7-ab7c-0a5c280b2dae',
    status: MoodStatus.Curious,
    intensity: Intensity.Level2,
    enteredAt: new Date(),
  },
  {
    user: '7c2f7be6-31e7-40e7-ab7c-0a5c280b2dae',
    status: MoodStatus.Confident,
    intensity: Intensity.Level0,
    enteredAt: new Date(),
  },
  {
    user: '7c2f7be6-31e7-40e7-ab7c-0a5c280b2dae',
    status: MoodStatus.Confident,
    intensity: Intensity.Level1,
    enteredAt: new Date(),
  },
  {
    user: '7c2f7be6-31e7-40e7-ab7c-0a5c280b2dae',
    status: MoodStatus.Confident,
    intensity: Intensity.Level2,
    enteredAt: new Date(),
  },
];
