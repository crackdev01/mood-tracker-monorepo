import { Controller, Get, Request } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  /**
   * Get User Profile
   *
   * To access this the request need to have JwtToken in Request Authentication: Bearer Token.
   * Otherwise it will return 401 unauthorized.
   * @param req
   */
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
