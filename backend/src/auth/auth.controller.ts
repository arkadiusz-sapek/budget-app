import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UserDto } from 'src/users/dto/user.dto';

import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('log-in')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('sign-in')
  async register(@Body() user: UserDto) {
    return this.authService.register(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }
}
