import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JsonData, jsonDataType } from '../Util/jsonData';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async login(body: User): Promise<jsonDataType> {
    const jsonData = new JsonData();
    let data = await this.userRepository.findOne({
      where: { username: body.username, password: body.password },
    });
    let bol: boolean = data ? true : false;
    if (bol) {
      jsonData.setCode(200);
      jsonData.setMessage('登录成功');
    } else {
      jsonData.setCode(601);
      jsonData.setMessage('账号密码错误');
    }
    return jsonData.sendData();
  }
  async registered(body: User): Promise<jsonDataType> {
    const jsonData = new JsonData();
    let user = this.userRepository.create(body);
    // let data = this.userRepository.save(body);
    console.log(user);
    return jsonData.sendData();
    // return this.userRepository.save(body);
  }
}
