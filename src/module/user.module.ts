import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginController } from '../controller/login.controller';
import { LoginService } from '../service/login.service';
import { User } from '../entity/user.entity';
import { UserController } from 'src/controller/user.controller';
import { UserService } from 'src/service/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User], 'mydatabase')],
  controllers: [LoginController, UserController],
  providers: [LoginService, UserService],
})
export class UsersModule {}
