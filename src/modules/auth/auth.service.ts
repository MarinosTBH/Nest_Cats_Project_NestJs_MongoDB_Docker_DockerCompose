import { Injectable, Logger, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/schema/users.schema';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async signIn(user: User) {
        const users = await this.usersService.findAll();

        const foundUser = users.find((user)=> user.name === user.name)

        if (!foundUser) {
            throw new NotFoundException('User does not exist')
        }
        
        if (foundUser?.password !== user.password) {
            throw new UnauthorizedException('Wrong credentials')
        }
        const payload = { sub: foundUser._id, name: foundUser.name };
        
        Logger.log(`${foundUser.name} logged in!`);
        
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}
