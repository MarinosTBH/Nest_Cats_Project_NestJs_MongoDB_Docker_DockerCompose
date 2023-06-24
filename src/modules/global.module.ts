import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatController } from './cats/cats.controller';
import { UsersController } from './users/users.controller';
import { CatService } from './cats/cat.service';
import { UsersService } from './users/users.service';
import { User, UserSchema } from './users/schema/users.schema';
import { Cat, CatSchema } from './cats/schema/cat.schema';
import { AuthModule } from './auth/auth.module';
// import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([
    { name: Cat.name, schema: CatSchema },
    { name: User.name, schema: UserSchema },
  ])],
  controllers: [CatController, UsersController],
  providers: [CatService, UsersService],
})
export class GlobalModule { }
