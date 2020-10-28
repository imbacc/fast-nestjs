import { NestFactory } from '@nestjs/core'
import AppModule from './module/app.module'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import ModulesTools from './common/tools/modules.tools'         //自动导入

const fastify: FastifyAdapter = new FastifyAdapter({ logger: false })
const port: number = 3000	// 默认端口
const ip: string = '127.0.0.1'
const tools = ModulesTools('common/tools',['modules.tools']) // 获取工具类

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastify)
  for (const tool of tools) {
    await tool(app, ip, port)
  }

  await app.listen(port, ip)

  console.log('启动环境:', process.env.NODE_ENV)
  console.log(`启动服务: http://${ip}:${port}`)
}

bootstrap()
