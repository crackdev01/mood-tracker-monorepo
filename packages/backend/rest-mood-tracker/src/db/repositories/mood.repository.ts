import { AbstractRepository, EntityManager, EntityRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { MoodEntity } from 'src/db/entities/mood.entity';

@Injectable()
@EntityRepository(MoodEntity)
export class MoodRepository extends AbstractRepository<MoodEntity> {
  constructor(protected readonly manager: EntityManager) {
    super();
  }

  insertMood() {
    // TODO: add code to insert mood into table.
  }

  updateMood() {
    // TODO: add code to update mood into table.
  }

  deleteMood() {
    // TODO: add code to delete mood from the table.
  }

  findMoodEntries() {
    // TODO: add code to fetch mood entries from the table.
  }


}
