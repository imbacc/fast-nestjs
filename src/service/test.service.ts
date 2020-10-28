import { Injectable } from '@nestjs/common'
import Cat from '../impl/test.impl'

@Injectable()
export default class CatsService {
  private readonly cats: Cat[] = []

  create(cat: Cat) {
    this.cats.push(cat)
  }

  findAll(): Cat[] {
    return this.cats
  }
}