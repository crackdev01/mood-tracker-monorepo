import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
  Request,
} from '@nestjs/common';

import { Public } from 'src/auth/auth.decorator';
import { MoodService } from 'src/mood/mood.service';

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
  @Put('entry')
  async putMoodEntry(@Request() req, @Body() payload) {
    return await this.moodService.updateMoodEntry(payload);
  }

  @Public()
  @Delete('entry/:id')
  async deleteMoodEntry(@Param('id') id) {
    return await this.moodService.deleteMoodEntry(id);
  }
}
