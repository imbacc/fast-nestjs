import * as helmet from 'helmet'
import * as rateLimit from 'fastify-rate-limit'
import * as compression from 'compression'
import { join } from 'path'

/**
 * API限流 和 静态资源
 */

export default (app) => {
    const time = setTimeout(() => {
        clearTimeout(time)
        console.log('启动API限流...')
        console.log('启动静态资源...')
    })

    // 静态资源
    app.useStaticAssets({
        root: join(__dirname, '../../../', 'public'),
        prefix: '/static/'
    })

    // 全局配置跨域
    app.enableCors() // 这个nest自带
    
    // 通过适当地设置HTTP标头，头盔可以帮助保护您的应用免受一些众所周知的Web漏洞的影响。通常，Helmet只是12个较小的中间件函数的集合，它们设置与安全相关的HTTP头（阅读更多）。
    app.use(helmet())

    // 压缩 GZIP
    app.use(compression())

    // 为了保护您的应用程序免受暴力攻击，您必须实现某种速率限制。幸运的是，NPM上已经有很多各种中间件可用。其中一个是快速限额。
    // register 是fastify 注册
    app.register(rateLimit, {
        windowMs: 15 * 60 * 1000, // 15分钟
        max: 100, // 将每个IP限制为每个窗口100个请求
    })
}