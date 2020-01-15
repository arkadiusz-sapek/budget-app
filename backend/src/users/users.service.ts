import { Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

import { User } from './models/user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  public async getAll() {
    return await this.userRepo.find();
  }

  public async getUserByEmail(email: string) {
    const user = await this.userRepo.findOne({
      where: { email },
    });
    return user;
  }

  public async createUser(email: string, hashedPassword: string) {
    const newUser = this.userRepo.create({
      email,
      password: hashedPassword,
    });
    await this.userRepo.save(newUser);

    return newUser;
  }

  //   async register(register: UserDto) {
  //     const { email, password } = register;

  //     const emailExists = await this.userRepo.findOne({
  //       where: { email },
  //     });

  //     if (emailExists) {
  //       throw new HttpException('Email is already taken', HttpStatus.CONFLICT);
  //     }

  //     const hash = await bcrypt.hash(password, 10);

  //     const newUser = this.userRepo.create({
  //       ...register,
  //       password: hash,
  //     });
  //     await this.userRepo.save(newUser);

  //     return true;
  //   }

  //   async login(login: UserDto) {
  //     const { email, password } = login;

  //     const user = await this.userRepo.findOne({ where: { email } });

  //     if (!user) {
  //       throw new HttpException('Invalid credentials', HttpStatus.CONFLICT);
  //     }

  //     const comparePasswords = await bcrypt.compare(password, user.password);

  //     if (!comparePasswords) {
  //       throw new HttpException('Invalid credentials', HttpStatus.CONFLICT);
  //     }

  //     const token = await this.authService.signIn(user.id);

  //     return {
  //       ...user,
  //       token,
  //     };
  //   }
}
