import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Request,
} from '@nestjs/common';

import { MoodService } from 'src/mood/mood.service';
import { Public } from 'src/auth/auth.decorator';

@Controller('mood')
export class MoodController {
  constructor(private readonly moodService: MoodService) {}

  @Public()
  @Get('entries')
  async getMoodEntries(@Request() req) {
    return await this.moodService.findMoodEntriesByUser(req.user);
  }

  @Public()
  @Post('entry')
  async postMoodEntry(@Request() req, @Body() payload) {
    return await this.moodService.insertMoodEntry(payload);
  }

  @Public()
  @Patch('entry')
  async patchMoodEntry(@Request() req, @Body() payload) {
    return await this.moodService.updateMoodEntry(payload);
  }

  @Public()
  @Delete('entry')
  async deleteMoodEntry(@Request() req, @Body() payload) {
    return await this.moodService.deleteMoodEntry(payload);
  }
}
