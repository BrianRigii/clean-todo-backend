import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/sign_in.dto';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/sign_up.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService : JwtService) { }


    async signIn(signInDto: SignInDto): Promise<any> {
        const user = await this.userService.findOne(signInDto.email);
        const isMatch = await bcrypt.compare(signInDto.password, user.password);

        if (!user || !isMatch) throw new UnauthorizedException();

        const payload = { username: user.email, sub: user.id };
        const {password, ...result} = user;

        return {
            ...result,
            access_token: this.jwtService.sign(payload),
        }

    }

    async signUp(signUpDto: SignUpDto): Promise<any> {
        const saltRounds = 10;
        signUpDto.password = await bcrypt.hash(signUpDto.password, saltRounds);


       return this.userService.create(signUpDto);
    }
}
