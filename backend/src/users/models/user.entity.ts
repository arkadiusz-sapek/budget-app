import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

import { Category } from '../../categories/models/category.entity'
import { Transaction } from '../../transactions/models/transaction.entity'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @OneToMany(
        () => Category,
        category => category.id,
        { nullable: true }
    )
    category: Category

    @OneToMany(
        () => Transaction,
        transaction => transaction.id,
        { nullable: true }
    )
    transaction: Transaction
}
