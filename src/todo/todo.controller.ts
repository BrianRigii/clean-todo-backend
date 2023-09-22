import { Body, Controller, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService){}
    @Post()
    create(@Body()createTodoDto: CreateTodoDto){
        this.todoService.create(createTodoDto);
    }

    
}
