import { Module } from '@nestjs/common';
import { CatsController } from './cat.controllers';
import { CatsService } from './cat.service';
import { Cat, CatSchema } from './schema/cat.schema';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://MarinosTBH:123456aze@clusterme.ahmp7.mongodb.net/?retryWrites=true&w=majority'), 
        MongooseModule.forFeature([
            {
                name: Cat.name,
                schema: CatSchema
            }
        ])
    ],
    controllers: [CatsController],
    providers: [CatsService], //injecting provider
})
export class CatsModule {}
