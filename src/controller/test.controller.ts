import { Controller, Get, Post, Param, Body, Query, Response, Res } from '@nestjs/common'
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger'
import { ValidationPipe } from '../common/tools/validator.tools'

import TestService from '../service/test.service'
import UserEntity from '../entity/user.entity'

@ApiTags('test')
@Controller('/test')
export default class TestController {
  constructor(private readonly service: TestService) {}

  @Get('/get')
  get(): string {
    return 'GET请求...'
  }

  @Post('/post')
  post(@Response() res1, @Res() res2) {
    // @Response 为 koa2 重定向 res.redirect('/user') //路由跳转        	
    // @Res 为 fastify 重定向 res.status(302).redirect('/user') //路由跳转        	
    return 'body'
  }

  @Get('/fff')
  fff(): string {
    return 'test/fff 路径GET请求...'
  }

  @Get('/:id')
  id(@Param() param): string {
    return `test/${param.id} 参数路径GET请求...`
  }

  @Get('/:id/:name')
  name(@Param('id') id: number, @Param('name') name: string): string {
    return `test/${id}/${name} 参数路径GET请求与上方请求差不多...`
  }

  @Get('/async')
  async asyncfff(): Promise<any[]> {
    // 每个异步函数都必须返回Promise
    return await ['tset/async 异步GET请求']
  }

  @Get('/dto')
  @ApiCreatedResponse({
    description: 'dto 实体类...'
  })
  dto(): any {
    return new Dto()
  }

  @Get('/query')
  query(@Query() id: string): string {
    return `test/query query=${id}`;
  }

  @Post('/verify')
  verify(@Body(new ValidationPipe()) user: UserEntity): any {
    return `test/verify ${user}`;
  }
}

class Dto {
  name: string = 'name'
  age: number = 111
}
