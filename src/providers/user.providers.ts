import { Connection, Repository } from 'typeorm'
import UserEntity from '../entity/user.entity'

export const userProviders = [
  {
    provide: 'UserEntity_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(UserEntity),
    inject: ['DATABASE_CONNECTION']
  }
]