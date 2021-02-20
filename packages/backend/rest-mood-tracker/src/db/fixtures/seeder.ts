import { Connection, InsertResult, ObjectType } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { userFixtures } from 'src/db/fixtures/user.fixture';
import { Logger } from '@nestjs/common';
import { UserEntity } from "src/db/entities/user.entity";

type Entity = ObjectType<Record<string, unknown>>;
interface Fixture {
  entity: Entity;
  values: QueryDeepPartialEntity<Entity>[];
}

async function seedHelper(
  connection: Connection,
  entity: Entity | string,
  values: QueryDeepPartialEntity<Entity>[],
): Promise<InsertResult> {
  return connection.createQueryBuilder().insert().into(entity).values(values).execute();
}

const fixtures: Fixture[] = [
  { entity: UserEntity, values: userFixtures },
];

export async function seedDatabase(connection: Connection): Promise<void> {
  await connection.query('CREATE EXTENSION IF NOT EXISTS unaccent;');
  const logger: Logger = new Logger('DatabaseSeeder');
  logger.debug('Seeding database.');
  for (const fixture of fixtures) {
    logger.debug(`Seeding ${fixture.entity.name}`);
    await seedHelper(connection, fixture.entity, fixture.values);
  }
  logger?.debug('Seeding complete.');
}
