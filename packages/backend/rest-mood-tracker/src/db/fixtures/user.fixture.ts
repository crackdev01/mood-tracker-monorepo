import { UserEntity } from 'src/db/entities/user.entity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export const userFixtures: QueryDeepPartialEntity<UserEntity>[] = [
  {
    username: 'test@test.com',
    password: 'password',
  },
];
