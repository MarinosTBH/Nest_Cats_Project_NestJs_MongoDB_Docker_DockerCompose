import { NestFactory } from '@nestjs/core';
<<<<<<< HEAD
import { Logger, ValidationPipe } from '@nestjs/common';
=======
import { ValidationPipe } from '@nestjs/common';
>>>>>>> ee89180 (First commit)
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

<<<<<<< HEAD
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.APP_PORT, async () =>
    Logger.log(`App is running on: ${await app.getUrl()} `));
=======
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))

  await app.listen(3000);
  
>>>>>>> ee89180 (First commit)
}
bootstrap();