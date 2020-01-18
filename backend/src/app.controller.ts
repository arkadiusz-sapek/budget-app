import { Controller, Get, Request } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/')
  async login(@Request() req) {
    return 'hello world';
  }
}
