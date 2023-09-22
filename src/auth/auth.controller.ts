import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign_in.dto';
import { SignUpDto } from './dto/sign_up.dto';
import { Public } from './public';

@Public()
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}


    @Post('login')
     login(@Body() signInDto: SignInDto) {
        return this.authService.signIn(signInDto);
    }

    @Post('signup')
    signUp(@Body() signUpDto: SignUpDto) {
      return  this.authService.signUp(signUpDto);
    }


}
 