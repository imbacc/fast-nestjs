import { Module } from '@nestjs/common'

import UserService from '../service/user.service'

@Module({
  providers: [UserService],
  exports: [UserService]
  // providers: [], // 已经在app.module.ts向上导入了 再导入需要使用双重导入 forwardRef(() => UserService)
})

export default class UserModule {}