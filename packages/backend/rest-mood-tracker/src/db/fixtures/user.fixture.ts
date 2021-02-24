import { UserEntity } from 'src/db/entities/user.entity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export const userFixtures: QueryDeepPartialEntity<UserEntity>[] = [
  {
    uuid: '7c2f7be6-31e7-40e7-ab7c-0a5c280b2dae',
    username: 'testuser',
    password: 'moodtracker666$!',
  },
];
