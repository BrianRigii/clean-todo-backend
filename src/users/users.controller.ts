import { Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService : UsersService){}


    @Get()
    findAll(){
        return this.userService.findAll();
    }
}
