import { Request, Response, NextFunction } from "express";

export function logger(req: Request, res: Response, next: NextFunction) {
    console.log('you can pass the middleware let you in');
    next()
}
//Consider using the simpler functional middleware alternative any time your middleware doesn't need any dependencies. 
