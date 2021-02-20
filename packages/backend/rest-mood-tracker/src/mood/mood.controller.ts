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

@Controller('mood')
export class MoodController {
  constructor(private readonly moodService: MoodService) {}

  @Get('entries')
  async getMoodEntries(@Request() req) {
    return await this.moodService.findMoodEntriesByUser(req.user);
  }

  @Post('entry')
  async postMoodEntry(@Request() req, @Body() payload) {
    return await this.moodService.insertMoodEntry(payload);
  }

  @Patch('entry')
  async patchMoodEntry(@Request() req, @Body() payload) {
    return await this.moodService.updateMoodEntry(payload);
  }

  @Delete('entry')
  async deleteMoodEntry(@Request() req, @Body() payload) {
    return await this.moodService.deleteMoodEntry(payload);
  }
}
