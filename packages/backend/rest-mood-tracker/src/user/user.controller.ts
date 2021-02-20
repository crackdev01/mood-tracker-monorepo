import { Controller, Get, Request } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

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
