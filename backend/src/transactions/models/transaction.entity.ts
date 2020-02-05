import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne
} from 'typeorm'

import { User } from '../../users/models/user.entity'
import { Category } from '../../categories/models/category.entity'

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    value: number

    @Column()
    isExpanse: number

    @CreateDateColumn({ type: 'date' })
    createdAt: Date

    @ManyToOne(
        () => User,
        user => user.id,
        { nullable: true }
    )
    user: User

    @Column()
    userId: number

    @ManyToOne(
        () => Category,
        category => category.id,
        { nullable: true }
    )
    category: Category

    @Column()
    categoryId: number
}
