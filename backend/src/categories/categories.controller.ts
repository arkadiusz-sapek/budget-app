import { Controller, Get } from '@nestjs/common'

import { CategoriesService } from './categories.service'

@Controller('categories')
export class CategoriesController {
    constructor(private usersService: CategoriesService) {}

    @Get()
    public async getAll() {
        return await this.usersService.getAll()
    }
}
