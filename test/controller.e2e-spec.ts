import { Test, TestingModule } from '@nestjs/testing'

// app 控制器和业务测试
import AppController from '../src/controller/app.controller'
import AppService from '../src/service/app.service'

describe('AppController', () => {
  let appController: AppController
  console.log('准备执行AppController 控制器...')

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile()
    appController = app.get<AppController>(AppController)
    console.log('创建AppController测试模型 完毕...')
  })

  describe('/hello GET 请求 返回 string 类型结果', () => {
    it('AppService getHello 函数业务执行', () => {
      const value = appController.getHello()
      console.log('执行AppService getHello 函数业务执行...')
      expect(value).toBe('Hello World!')
      console.log(`执行结果=${value}`)
    })
  })
})
