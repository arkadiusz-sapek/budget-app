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

  async register(register: UserDto) {
    const { email, password } = register;

    const emailExists = await this.userRepo.findOne({
      where: { email },
    });

    if (emailExists) {
      throw new HttpException('Email is already taken', HttpStatus.CONFLICT);
    }

    const hash = await bcrypt.hash(password, 10);

    const newUser = this.userRepo.create({
      ...register,
      password: hash,
    });
    await this.userRepo.save(newUser);

    return true;
  }
}
