import { Controller, Get, Post, Response, Body, Query } from '@nestjs/common';
import { LoginService } from '../service/login.service';
import { User } from '../entity/user.entity';
import { jsonDataType, JsonData } from '../Util/JsonData';
import { Public } from '../common/decorator/public.decorator';
import { Utils } from '../Util/util';
import { JwtClass } from '../Util/jwt';
@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Public()
  @Post('/login')
  async login(@Body() body: User, @Response() res): Promise<void> {
    const data: User = await this.loginService.login(body);
    const jsonData = new JsonData();
    jsonData.setCode(Utils.successCode);
    jsonData.setMessage('登录成功');
    const token = await JwtClass.setToken(data);
    res.cookie('sid', token, {
      domain: '192.168.1.109',
      // maxAge: 3600,
      httpOnly: true,
      // signed: true,
    });
    res.send(jsonData.sendData());
  }

  @Public()
  @Post('/registered')
  async registered(@Body() body: User): Promise<jsonDataType<User>> {
    await this.loginService.registered(body);
    const jsonData = new JsonData();
    jsonData.setCode(Utils.successCode);
    jsonData.setMessage('注册成功');
    return jsonData.sendData();
  }
}
