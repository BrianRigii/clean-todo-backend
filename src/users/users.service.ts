import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from 'src/auth/dto/sign_up.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>){}

    async findOne (email: string) : Promise<User | undefined>{
        return this.usersRepository.findOneBy({email: email});
    }

    async findOneById (id: number) : Promise<User | undefined>{
        return this.usersRepository.findOneBy({id: id});
    }


    async create (signUpDto: SignUpDto) : Promise<User>{
        const user  = this.usersRepository.create(signUpDto);
        return this.usersRepository.save(user);
    }

    async findAll() : Promise<User[]>{
        return this.usersRepository.find();
    }
}
