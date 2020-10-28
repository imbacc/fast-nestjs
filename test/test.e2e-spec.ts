import { Test, TestingModule } from '@nestjs/testing'
import TestController from '../src/controller/test.controller'
import TestService from '../src/service/test.service'

describe('TestController', () => {
  let controller: TestController
  let service: TestService
  console.log('准备执行TestController 控制器...')

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TestController],
      providers: [TestService]
    }).compile()
    controller = app.get<TestController>(TestController)
    console.log('创建TestController测试模型 完毕...')
  })

  describe('/test/get GET 请求 返回 string 类型结果', () => {
    it('AppService getHello 函数业务执行', () => {
      const value = controller.get()
      console.log('执行AppService getHello 函数业务执行...')
      expect(value).toBe('GET请求...')
      console.log(`执行结果=${value}`)
    })
  })
})
