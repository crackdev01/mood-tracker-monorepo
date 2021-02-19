import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../db/entities/user.entity';
import { UserRepository } from '../db/repositories/user.repository';

//UsersService exported with array of the @Module decorator so that it is visible outside this module (we'll use it in AuthService)
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, UserRepository])],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
