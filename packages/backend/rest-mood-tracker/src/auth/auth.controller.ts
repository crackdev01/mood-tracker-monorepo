import { Controller, Post, Request, Body } from '@nestjs/common';

import { Public } from './auth.decorator';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Request() req, @Body() body) {
    return this.authService.login(body);
  }
}
