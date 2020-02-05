import { Controller, Get } from '@nestjs/common'

import { TransactionsService } from './transactions.service'

@Controller('transactions')
export class TransactionsController {
    constructor(private transactionsService: TransactionsService) {}

    @Get()
    public async getAll() {
        return await this.transactionsService.getAll()
    }
}
