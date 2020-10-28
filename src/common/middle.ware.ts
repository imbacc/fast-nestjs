import { Injectable, NestMiddleware } from '@nestjs/common'
import { FastifyRequest, FastifyReply } from 'fastify'

/**
 * 中间件
 */

@Injectable()
export default class middleTools implements NestMiddleware {
  use(req: FastifyRequest, res: FastifyReply, next: Function) {
    console.log('中间件执行...')
    next()
  }
}
