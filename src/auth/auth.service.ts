import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/sign_in.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService : JwtService) { }


    async signIn(signInDto: SignInDto): Promise<any> {
        const user = await this.userService.findOne(signInDto.email);

        if (!user || user.password != signInDto.password) throw new UnauthorizedException();

        const payload = { username: user.email, sub: user.id };
        const {password, ...result} = user;

        return {
            ...result,
            access_token: this.jwtService.sign(payload),
        }

    }
}
