import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './models/user.entity';

@Injectable()
export class TestUsersService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  public async getAll() {
    return await this.repo.find();
  }
}
