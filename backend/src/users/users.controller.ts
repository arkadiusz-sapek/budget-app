import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  public async getAll() {
    return await this.usersService.getAll();
  }

  @Post()
  public async register(@Body() user: UserDto) {
    return await this.usersService.register(user);
  }
}
