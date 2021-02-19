import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  findUser(email: string) {
    return this.createQueryBuilder('user')
      .where('user.email = :email', { email: email })
      .addSelect('user.password')
      .getOne();
  }
}
