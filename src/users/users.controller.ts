import { Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Post()
    create() {
        return 'This action adds a new user';
    }
}
