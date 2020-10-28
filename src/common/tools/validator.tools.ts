import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

/**
 * 类验证器 也可用Schema
 */

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) return value
    const object = plainToClass(metatype, value)
    const errors = await validate(object)
    if (errors.length > 0) throw new BadRequestException('Validation failed')

    return value
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object]
    return !types.includes(metatype)
  }
}

export default (app) => {
  const time = setTimeout(() => {
      clearTimeout(time)
      console.log('启动类验证器...')
  })

  app.useGlobalPipes(new ValidationPipe())
}