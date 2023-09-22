
import { Todo } from "src/todo/entities/todo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({unique: true})
    email: string;
    @Column()
    name: string;
    @Column({default: true})
    active: boolean;
    @Column()
    password: string;

   @OneToMany(() => Todo, todo => todo.user)
    todos: Todo[];
    
    
}