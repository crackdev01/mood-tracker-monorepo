import { Controller, Get, Request } from '@nestjs/common';
import { MoodService } from 'src/mood/mood.service';

@Controller('mood')
export class MoodController {
  constructor(private readonly moodService: MoodService) {}

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
