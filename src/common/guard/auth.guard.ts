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
import { getDateAll } from '../../Util/type/type';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() {}
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

    if (isPublic) {
      return true;
    } else {
      try {
        let user = JwtClass.getTokenData(sid) as any;
        request.cookies.user = user;
        // console.log(user);
        delete user.iat;
        delete user.exp;
        // console.log(user);
        (async () => {
          let token = await JwtClass.setToken(user);
          if (user.id) {
            response.cookie('sid', token, {
              domain: '192.168.1.109',
              // maxAge: 3600,
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
