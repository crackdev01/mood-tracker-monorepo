import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  username: string;

  @Column({ select: false })
  password: string;
}
