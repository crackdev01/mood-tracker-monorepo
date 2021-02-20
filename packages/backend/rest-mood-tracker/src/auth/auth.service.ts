import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UserEntity } from 'src/db/entities/user.entity';
import { UserService } from 'src/user/user.service';

type UserResponse = Omit<UserEntity, 'password'>;

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<UserResponse> {
    const user = await this.userService.findUserForLogin(username);
    if (user) {
      // TODO: encode pwd and compare.
      if (pass === user.password) {
        const { password, ...result } = user;
        return result;
      } else {
        throw new HttpException('Wrong password.', HttpStatus.BAD_REQUEST);
      }
    } else {
      throw new HttpException(
        'No user with username ' + username + ' found.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async login(user: UserEntity) {
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
