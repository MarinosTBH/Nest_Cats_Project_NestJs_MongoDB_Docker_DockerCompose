import { Module } from '@nestjs/common';
import { CatsController } from './cat.controllers';
import { CatsService } from './cat.service';

@Module({
    controllers: [CatsController],
    providers: [CatsService], //injecting provider
})
export class CatsModule {}
