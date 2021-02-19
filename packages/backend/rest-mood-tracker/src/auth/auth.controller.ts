import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { Public } from './auth.decorator';
import { LocalAuthGuard } from './local.auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
