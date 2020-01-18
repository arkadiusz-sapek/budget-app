import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

import { UserDto } from 'src/users/dto/user.dto';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(user: UserDto) {
    const { email, password } = user;

    const emailExists = await this.usersService.getUserByEmail(email);

    if (emailExists) {
      throw new HttpException('Email is already taken', HttpStatus.CONFLICT);
    }

    const hash = await bcrypt.hash(password, 10);
    const newUser = await this.usersService.createUser(email, hash);

    return newUser;
  }

  async login(login: UserDto) {
    const { email, password } = login;

    const user = await this.usersService.getUserByEmail(email);

    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.CONFLICT);
    }

    const comparePasswords = await bcrypt.compare(password, user.password);

    if (!comparePasswords) {
      throw new HttpException('Invalid credentials', HttpStatus.CONFLICT);
    }

    const token = await this.signIn(user.id);

    return {
      ...user,
      token,
    };
  }

  async signIn(id: number) {
    const user = { id };
    const token = this.jwtService.sign(user);
    return token;
  }
}
