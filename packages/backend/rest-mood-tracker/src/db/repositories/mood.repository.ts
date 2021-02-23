import {
  AbstractRepository,
  EntityManager,
  EntityRepository,
  SelectQueryBuilder,
} from 'typeorm';
import { Injectable } from '@nestjs/common';
import { MoodEntity } from 'src/db/entities/mood.entity';

@Injectable()
@EntityRepository(MoodEntity)
export class MoodRepository extends AbstractRepository<MoodEntity> {
  constructor(protected readonly manager: EntityManager) {
    super();
  }

  private getMoodEntriesQuery(): SelectQueryBuilder<MoodEntity> {
    return this.manager
      .createQueryBuilder(MoodEntity, 'mood')
      .where("mood.userUuid = '7c2f7be6-31e7-40e7-ab7c-0a5c280b2dae'")
      .orderBy("mood.enteredAt", 'DESC');
  }

  async insertMood(moodEntry: MoodEntity) {
    return await this.getRepositoryFor(MoodEntity).save(moodEntry);
  }

  async updateMood(moodEntry: MoodEntity) {
    return await this.getRepositoryFor(MoodEntity).update(moodEntry.id, {
      status: moodEntry.status,
      intensity: moodEntry.intensity,
      enteredAt: new Date(),
    });
  }

  async deleteMood(moodEntryId: number) {
    return await this.getRepositoryFor(MoodEntity).delete({ id: moodEntryId });
  }

  async findMoodEntry(moodEntryId: number): Promise<MoodEntity> {
    return await this.getRepositoryFor(MoodEntity).findOne({ id: moodEntryId });
  }

  async findMoodEntries(): Promise<MoodEntity[]> {
    return await this.getMoodEntriesQuery().execute();
  }
}
