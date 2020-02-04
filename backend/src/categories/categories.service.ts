import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Category } from './models/category.entity'

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepo: Repository<Category>
    ) {}

    public async getAll() {
        return await this.categoryRepo.find()
    }
}
