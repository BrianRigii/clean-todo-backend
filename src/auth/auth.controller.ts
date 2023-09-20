import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign_in.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}


    @Post('login')
     login(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto);
    }
}
 