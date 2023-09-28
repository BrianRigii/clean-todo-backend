import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService){}
    @Post()
    create(@Body()createTodoDto: CreateTodoDto){
       
       return this.todoService.create(createTodoDto);
    }

    @Get()
    findAll(){
        return this.todoService.findAll();
    }

    
}
