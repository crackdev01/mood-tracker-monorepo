import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../db/repositories/user.repository';
import { UserEntity } from 'src/db/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async findUserForLogin(username: string): Promise<UserEntity> {
    let user: UserEntity;
    try {
      user = await this.userRepository.findUser(username);
    } catch (error) {
      throw new HttpException(
        'No user with username ' + username + ' found.',
        HttpStatus.BAD_REQUEST,
      );
    }

    return user;
  }
}
