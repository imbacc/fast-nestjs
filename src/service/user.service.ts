import { Injectable, Inject } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Repository } from 'typeorm'

// import UserEntity from '../entity/user.entity'

export type User = any

@Injectable()
export default class UserService {

    private users: User[]

    constructor() {

        this.users = [
            {
              userId: 1,
              username: 'john',
              password: 'changeme',
            },
            {
              userId: 2,
              username: 'chris',
              password: 'secret',
            },
            {
              userId: 3,
              username: 'maria',
              password: 'guess',
            }
          ]
    }

    async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username)
    }

    // findOne(id: string): Promise<UserEntity> {
    //     return Promise.resolve(new UserEntity(111, 'FFF', '123456'))
    // }

    // findAll(): Promise<UserEntity[]> {
    // return this.usersRepository.find()
    // }

    // findOne(id: string): Promise<UserEntity> {
    // return this.usersRepository.findOne(id)
    // }

    // async remove(id: string): Promise<void> {
    // await this.usersRepository.delete(id)
    // }
}