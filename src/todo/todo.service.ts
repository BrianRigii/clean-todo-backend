import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class TodoService {
    constructor(@InjectRepository(Todo) private todoRepository: Repository<Todo>){}

    create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo =    this.todoRepository.create(createTodoDto)
        return this.todoRepository.save(todo);
    }

    findAll(): Promise<Todo[]> {
        return this.todoRepository.find();
    }

    findTodoByUser(user: User): Promise<Todo[]> {
        return this.todoRepository.find({ });
    }
}
