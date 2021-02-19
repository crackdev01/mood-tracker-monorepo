import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../db/entities/user.entity';
import * as bcrypt from 'bcrypt';

type UserResponse = Omit<User, 'password'>;

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<UserResponse> {
    const user = await this.usersService.findUserForLogin(email);
    if (user) {
      if (await bcrypt.compare(pass, user.password)) {
        const { password, ...result } = user;
        return result;
      } else {
        throw new HttpException('Wrong password.', HttpStatus.BAD_REQUEST);
      }
    } else {
      throw new HttpException(
        'No user with username ' + email + ' found.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async login(user: any) {
    //const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
