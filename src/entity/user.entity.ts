import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '主键id',
  })
  id: number;
  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
    length: 20,
    name: 'username',
    comment: '姓名',
  })
  username: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
    length: 20,
    name: 'password',
    comment: '密码',
  })
  password: string;
}
