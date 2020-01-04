import { Controller, Get } from '@nestjs/common';
import { TestUsersService } from './test-users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: TestUsersService) {}

  @Get()
  public async getAll() {
    return await this.usersService.getAll();
  }
}
