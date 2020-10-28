import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('user_info')
export default class UserInfo {

  // @PrimaryColumn() // 主键
  @PrimaryGeneratedColumn() // 自增主键
  id: number

  @Column({ length: 20 })
  username: string

  @Column('varchar', { length: 32 })
  password: string

  @Column({ type: 'int', name: 'create_time' }) // -> new Date().getTime()
  createTime: number

  @Column('int')
  num: number

  // tinyint型普通字段
  @Column('tinyint') 
  state: boolean

  constructor(id: number, username: string, password: string){
    this.id = id
    this.username = username
    this.password = password
  }
}