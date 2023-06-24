import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.APP_PORT, async () =>
    Logger.log(`App is running on: ${await app.getUrl()} `));
}
bootstrap();