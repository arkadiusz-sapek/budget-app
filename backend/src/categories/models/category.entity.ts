import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

import { User } from '../../users/models/user.entity'
import { Transaction } from '../../transactions/models/transaction.entity'

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(
        () => User,
        user => user.id,
        { nullable: true }
    )
    user: User

    @OneToMany(
        () => Transaction,
        transaction => transaction.id
    )
    transaction: Transaction

    @Column()
    userId: number
}
