import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { TestUsersService } from './test-users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [TestUsersService],
  controllers: [UsersController],
})
export class UsersModule {}
