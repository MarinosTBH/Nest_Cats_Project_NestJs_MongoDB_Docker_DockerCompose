import { AuthService } from './auth.service';
import { User } from '../users/schema/users.schema';
import { Response } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    getProfile(req: any): Promise<any>;
    singIn(userLogin: User): Promise<{
        access_token: string;
    }>;
    logOut(res: Response): string;
}
