import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { logger } from './common/middleware/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
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
