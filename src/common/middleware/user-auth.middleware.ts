import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import * as admin from 'firebase-admin';

@Injectable()
export class UserAuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: Function) {
    const auth = admin.auth();
    const jwt = req.headers.authorization?.split('Bearer ')[1];

    if (jwt != null && jwt != '') {
      auth
        .verifyIdToken(jwt)
        .then(async (decodedToken) => {
          const user = {
            email: decodedToken.email,
          };
          req['user'] = user;
          next();
        })
        .catch((error) => {
          console.error(error);
          this.accessDenied(req.url, res);
        });
    } else {
      next();
    }
  }

  private accessDenied(url: string, res: Response) {
    res.status(403).json({
      statusCode: 403,
      timestamp: new Date().toISOString(),
      path: url,
      message: 'Access Denied',
    });
  }
}
