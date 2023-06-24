import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { UsersService } from "../users/users.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "../users/schema/users.schema";
import { logger } from "src/common/middleware/logger.middleware";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "./auth.guard";

@Module({
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '360s' }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },],
})

export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger) // can take a simple or multiple middlewares
      .forRoutes({ path: 'auth', method: RequestMethod.ALL }); //reference the desired request method type       
  }
}
