import { Module } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { UserController } from 'src/user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../db/entities/user.entity';
import { UserRepository } from '../db/repositories/user.repository';

//UsersService exported with array of the @Module decorator so that it is visible outside this module (we'll use it in AuthService)
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, UserRepository])],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
