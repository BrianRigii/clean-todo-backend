import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthGuard } from './gaurds/auth.gaurd';
import { APP_GUARD } from '@nestjs/core';

@Module({
  controllers: [AuthController],
  providers: [AuthService,   {
    provide: APP_GUARD,
    useClass: AuthGuard,
  }],
  imports: [UsersModule, JwtModule.register({global: true, secret: jwtConstants.secret, signOptions: { expiresIn: '60s' }})]
})
export class AuthModule {}
