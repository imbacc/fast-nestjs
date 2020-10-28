import { Inject, forwardRef, Controller, Get, Post, UseGuards, Request, Body } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '@nestjs/passport'

// import UserEntity from '../entity/user.entity'
// import UserService from '../service/user.service'
import AuthService from '../service/auth.service'

@ApiTags('user')
@Controller('/user')
export default class UserController {
  constructor(
    private authService: AuthService,
    // private service: UserService
  ) {}

  // @UseGuards(AuthGuard('jwt'))
  // @Post('/login')
  // login(): any {
  //   const user = new UserEntity(1008611, 'imbacc', '123456')
  //   return this.service.login(user)
  // }

  @UseGuards(AuthGuard('local'))
  @Post('/auth')
  async auth(@Body() user) {
    return this.authService.login(user)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/profile')
  getProfile(@Request() req) {
    return req.user
  }
}
