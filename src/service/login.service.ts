import { HttpException, Injectable } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Utils } from 'src/Util/util';
@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User, 'mydatabase')
    private readonly userRepository: Repository<User>,
  ) {}

  async login(body: User): Promise<User> {
    if (!body.username || !body.password) {
      throw new HttpException('账号密码不能为空', Utils.errorCode);
    }
    const user: User = {
      username: body.username,
      password: body.password,
    };
    const data: User = await this.userRepository.findOne({
      where: user,
    });

    const bol: boolean = data?.id ? true : false;

    if (!bol) {
      throw new HttpException('账号密码错误', Utils.errorCode);
    }
    return data;
  }

  async registered(body: User): Promise<User | string> {
    if (!body.username || !body.password) {
      throw new HttpException('账号密码不能为空', Utils.errorCode);
    }
    try {
      return await this.userRepository.save(body);
    } catch (e) {
      switch (e) {
        case 'ER_DUP_ENTRY':
          throw new HttpException('该用户已存在', Utils.errorCode);
      }
      return e.code;
    }
  }
}
