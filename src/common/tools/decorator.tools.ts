import { applyDecorators, createParamDecorator, ExecutionContext } from '@nestjs/common'

/**
 * 装饰器 可用于全局
 */

// @User
export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    const user = request.user
    return data ? user && user[data] : user
  }
)

// @TestLOL
export const TestLOL = createParamDecorator(
  (name: string) => {
    console.log(`${name} 加入LOL...`)
    return `ping 999ms`
  }
)

export default (app) => {
  const time = setTimeout(() => {
      clearTimeout(time)
      console.log('启动装饰器...')
  })
}