import { Controller, Get, Request, Post, UseGuards, Body } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
console.log('test')

import { CredentialsDto } from 'src/users/dto/credentials.dto'

import { AuthService } from './auth.service'

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('log-in')
    async login(@Request() req) {
        return this.authService.login(req.user)
    }
    @Post('sign-in')
    async register(@Body() credentials: CredentialsDto) {
        return this.authService.register(credentials)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    getProfile(@Request() req) {
        return req.user
    }
}
