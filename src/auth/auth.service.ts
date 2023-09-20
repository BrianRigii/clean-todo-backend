import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/sign_in.dto';

@Injectable()
export class AuthService {
    constructor( private userService : UsersService ) {}


    async signIn(signInDto : SignInDto) : Promise<any> {
      const user =  await this.userService.findOne( signInDto.email );

        if (!user || user.password != signInDto.password) throw new UnauthorizedException();

    const {password , ...result} = user;

    return result;
    }
}
