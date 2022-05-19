import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from '../service/login.service';
import { User } from '../entity/user.entity';
import { jsonDataType } from '../Util/JsonData';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/login')
  async login(@Body() body: User): Promise<jsonDataType> {
    let data = await this.loginService.login(body);
    return data;
  }
  @Post('/registered')
  async registered(@Body() body: User): Promise<jsonDataType> {
    let data = this.loginService.registered(body);
    return data;
  }
}
