import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoodRepository } from 'src/db/repositories/mood.repository';

@Injectable()
export class MoodService {
  constructor(
    @InjectRepository(MoodRepository)
    private userRepository: MoodRepository,
  ) {}


}
