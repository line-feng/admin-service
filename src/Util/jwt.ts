import { User } from './../entity/user.entity';
import { sign, verify, JwtPayload } from 'jsonwebtoken';
export class JwtClass {
  static token_key: string = 'service';
  constructor() { }
  static setToken(rule: User): Promise<string> {
    rule = JSON.parse(JSON.stringify(rule));
    return new Promise((r, j) => {
      sign(rule, this.token_key, { expiresIn: 60 }, (err, token) => {
        if (err) return j(err);
        r(token);
      });
    });
  }
  static getTokenData(token: string): JwtPayload | string{
    const result: JwtPayload|string = verify(token, this.token_key);
    if (typeof result !== 'string'){
      delete result.iat;
      delete result.exp;
    }
    return result
  }
}
