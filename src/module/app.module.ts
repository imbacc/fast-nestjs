import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import ModulesTools from '../common/tools/modules.tools'  // 动态导入
import MiddleTools from '../common/middle.ware'    // 中间件

const ModuleFather = {
  imports: [...ModulesTools('module', 'app.module')],
  controllers: [...ModulesTools('controller')],
  providers: [...ModulesTools('service')]
}

console.log('ModuleFather=', ModuleFather)

@Module(ModuleFather)

export default class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MiddleTools).exclude('swagger/(.*)').forRoutes('*')
  }
}
