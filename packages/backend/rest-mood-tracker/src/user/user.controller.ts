import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @UseGuards(LocalAuthGuard)
  getProfile(@Request() req) {
    console.info(req.user);
    return req.user;
  }
}
