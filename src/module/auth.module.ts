
import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { jwtkey } from '../common/config'

import UsersModule from '../module/user.module'
import AuthService from '../service/auth.service'
import UsersService from '../service/user.service'
import LocalStrategy from '../common/local.strategy'
import JwtStrategy from '../common/jwt.strategy'

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtkey,
      signOptions: { expiresIn: '2h' }
    })
  ],
  providers: [AuthService, UsersService, LocalStrategy, JwtStrategy],
  exports: [AuthService, UsersService, JwtModule]
})

export default class AuthModule {}