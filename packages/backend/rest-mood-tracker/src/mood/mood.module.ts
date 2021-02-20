import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MoodService } from 'src/mood/mood.service';
import { MoodController } from 'src/mood/mood.controller';
import { MoodEntity } from 'src/db/entities/mood.entity';
import { MoodRepository } from 'src/db/repositories/mood.repository';

//UsersService exported with array of the @Module decorator so that it is visible outside this module (we'll use it in AuthService)
@Module({
  imports: [TypeOrmModule.forFeature([MoodEntity, MoodRepository])],
  providers: [MoodService],
  exports: [MoodService],
  controllers: [MoodController],
})
export class MoodModule {}
