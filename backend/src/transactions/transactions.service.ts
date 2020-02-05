import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Transaction } from './models/transaction.entity'

@Injectable()
export class TransactionsService {
    constructor(
        @InjectRepository(Transaction)
        private readonly categoryRepo: Repository<Transaction>
    ) {}

    public async getAll() {
        return await this.categoryRepo.find()
    }
}
