import { User } from './../../entity/user.entity';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Utils } from 'src/Util/util';
import { JwtClass } from '../../Util/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    let reflector = new Reflector();
    const isPublic = reflector.getAllAndOverride('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    let sid: string | null = request.cookies?.sid;
    // console.log(request);
    // console.log(request.hostname, 'hostname');
    // console.log(request.query, 'query');
    // console.log(request.params, 'params');
    // console.log(request.body, 'body');

    if (isPublic) {
      return true;
    } else {
      try {
        let user: unknown = JwtClass.getTokenData(sid);
        request.cookies.user = user;
        (async () => {
          let token = await JwtClass.setToken(user);
          if ((user as User).id) {
            response.cookie('sid', token, {
              domain: request.hostname,
              maxAge: 60000,
              httpOnly: true,
              // signed: true,
            });
          }
        })();
        return true;
      } catch (e) {
        // console.log(e);
        throw new HttpException('身份验证失败,请重新登陆！', Utils.loginErrorCode);
      }
    }
  }
}
