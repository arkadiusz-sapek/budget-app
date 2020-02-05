import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { CategoriesModule } from './categories/categories.module'
import { TransactionsModule } from './transactions/transactions.module'

@Module({
    imports: [
        AuthModule,
        UsersModule,
        CategoriesModule,
        TransactionsModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            url: process.env.DATABASE_URL,
            port: 5432,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE_NAME,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true
        })
    ]
})
export class AppModule {}
