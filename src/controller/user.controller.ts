import { Controller, Get, Post, Query, Body, Request } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { jsonDataType, JsonData } from '../Util/JsonData';
import { Public } from '../common/decorator/public.decorator';
import { Utils } from '../Util/util';
import { UserService } from 'src/service/user.service';
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Public()
  @Get('/selectUserList')
  async login(
    @Body() body: User,
    @Request() request,
  ): Promise<jsonDataType<User>> {
    const jsonData = new JsonData();
    const data = await this.userService.selectUserList(body);
    jsonData.setCode(Utils.successCode);
    jsonData.setList(data);
    jsonData.setMessage('查询成功');
    return jsonData.sendData();
  }
}
