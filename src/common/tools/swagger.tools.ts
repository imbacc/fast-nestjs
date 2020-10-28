import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

/**
 * swagger 文档
 */

const options = new DocumentBuilder()
.setTitle('Nest Fastify Swagger')
.setDescription('The API Description')
.setVersion('1.0')
.build()

export default (app, ip, port) => {
    const time = setTimeout(() => {
        clearTimeout(time)
        console.log(`启动Swagger: http://${ip}:${port}/swagger`)
    }, 10)
    
    const document = SwaggerModule.createDocument(app, options)
    SwaggerModule.setup('/swagger', app, document)
}