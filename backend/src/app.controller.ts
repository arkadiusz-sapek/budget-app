import { Controller, Get, Request } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  async login(@Request() req) {
    return 'hello world';
  }
}
