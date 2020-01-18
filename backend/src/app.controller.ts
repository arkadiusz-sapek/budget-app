import { Controller, Get, Request } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  async test(@Request() req) {
    return 'hello world';
  }
}
