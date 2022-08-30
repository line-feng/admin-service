import { sign, verify, JwtPayload } from 'jsonwebtoken';
import { User } from '../entity/user.entity';
export class JwtClass {
  static token_key: string = 'service';
  constructor() {}
  static setToken(rule: User): Promise<string> {
    rule = JSON.parse(JSON.stringify(rule));
    return new Promise((r, j) => {
      sign(rule, this.token_key, { expiresIn: 60 }, (err, token) => {
        if (err) return j(err);
        r(token);
      });
    });
  }
  static getTokenData(token: string): User {
    return verify(token, this.token_key) as User;
  }
}
