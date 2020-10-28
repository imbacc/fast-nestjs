import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import AppService from '../service/app.service'

@ApiTags('hello')
@Controller('/hello')
export default class AppController {
  constructor(private readonly service: AppService) {}

  @Get()
  getHello(): string {
    return this.service.getHello()
  }
}
