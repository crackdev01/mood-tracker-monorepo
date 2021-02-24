import { NestFactory } from '@nestjs/core';
import { Connection } from 'typeorm';
import { AppModule } from './app.module';
import { seedDatabase } from 'src/db/fixtures/seeder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);

  if (process.env.ENVIRONMENT === 'development') {
    await seedDatabase(app.get<Connection>(Connection));
  }
}
bootstrap();
