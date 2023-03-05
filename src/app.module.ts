import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GlobalModule } from './modules/global.module';
import { ConfigModule } from '@nestjs/config';

@Module({
<<<<<<< HEAD
  imports:
    [
      ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
      MongooseModule.forRoot(process.env.MONGODB_URL),
      GlobalModule,
    ],
})
export class AppModule { }
=======
  imports: 
    [CatsModule]
}) 
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger) // can take a simple or multiple middlewares
      .forRoutes({ path: 'cats', method: RequestMethod.GET}); //reference the desired request method type       
  }
} 
>>>>>>> ee89180 (First commit)
