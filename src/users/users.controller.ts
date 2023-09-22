import { Controller, Delete, Get, Param,  } from '@nestjs/common';

import { UsersService } from './users.service';
import { Public } from 'src/auth/public';

@Controller('users')
export class UsersController {
  constructor(private userService : UsersService){}

  
    @Get()
    findAll(){
        return this.userService.findAll();
    }
  
    @Delete(':id')
    removeUser(@Param('id') id: number ){
        try{
            this.userService.removeUser(id);
            return {message: 'User deleted successfully'}
        } catch (error){

            console.log(error);
            return {
                message: 'Error deleting user'
            }
        }

    }
}
