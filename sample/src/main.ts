import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = 3000;
  await app.listen(port);
  console.info('--------------------------------------------------------');
  console.info(`| Running on:         http://localhost:${port}          |`);
  console.info('--------------------------------------------------------');
}
bootstrap();
