import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/schema/users.schema';
import { Public } from 'src/guard/public.decorator';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Get('profile')
    async getProfile(@Request() req) {
        return req.user
    }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('login')
    singIn(@Body() userLogin: User) {
        return this.authService.signIn(userLogin)
    }

    @Get('logout')
    logOut(@Res() res: Response) {
        res.removeHeader('rawHeaders')
        console.log(res);
        
        return 'Token removed from the header';
    }
}
