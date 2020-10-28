import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

/**
 * 拦截器
 */

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('拦截器执行前...')
    const now = Date.now()
    const fun = tap(() => console.log(`拦截器执行后... ${Date.now() - now}ms`))
    return next.handle().pipe(fun)
  }
}

export default (app) => {
    const time = setTimeout(() => {
        clearTimeout(time)
        console.log('启动拦截器...')
    })

    app.useGlobalInterceptors(new LoggingInterceptor())
}