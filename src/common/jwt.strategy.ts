import { Strategy, ExtractJwt } from 'passport-jwt'
import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { jwtkey } from '../common/config'

/**
 * JWT令牌
 */

@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtkey
    })
  }

  async validate(user: any) {
    console.log('验证JWT令牌=', user)
    return { userId: user.sub, username: user.username };
  }
  
  // async validate(username: string, password: string) {
  //   const user = await this.service.findOne(username)
  //   console.log('验证JWT令牌=', user)
  //   if(!user.username || !user.password) return false

  //   if (user && user.password === password) {
  //     const { password, ...result } = user
  //     return result
  //   }
    
  //   return false
  // }
}