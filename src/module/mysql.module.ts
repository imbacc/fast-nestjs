import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { mysql } from '../common/config'
import { Connection } from 'typeorm'

@Module({
  imports:[
    TypeOrmModule.forRoot(mysql)
  ],
  providers: [],
  exports: [TypeOrmModule]
})

export default class MysqlModule {
  constructor(private connection: Connection) {}
}