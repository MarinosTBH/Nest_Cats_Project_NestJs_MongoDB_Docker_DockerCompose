import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GlobalModule } from './modules/global.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:
    [
      ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
      MongooseModule.forRoot(process.env.MONGODB_URL),
      GlobalModule,
    ],
})
export class AppModule { }