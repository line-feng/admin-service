import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User, 'mydatabase')
    private readonly userRepository: Repository<User>,
  ) {}

  async selectUserList(body: User): Promise<User[]> {
    let data: User[] = null,
      user = { username: Like<string>(`%${body.username}%`) };
    if (body?.username) {
      data = await this.userRepository.find({
        where: [user],
      });
    } else {
      data = await this.userRepository.find();
    }
    return data;
  }
}
