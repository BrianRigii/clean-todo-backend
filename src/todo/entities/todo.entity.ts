import { User } from "src/users/entities/user.entity";
import { ManyToOne } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { CreateDateColumn } from "typeorm/decorator/columns/CreateDateColumn";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { UpdateDateColumn } from "typeorm/decorator/columns/UpdateDateColumn";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity()
export class Todo{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    title: string;
    
    @Column()
    description: string;
    
    @Column({default: false})
    isDone: boolean;
    
    @Column({default: false})
    isDeleted: boolean;

    @ManyToOne(()=> User, user => user.todos)
    user: User;
    
    @CreateDateColumn()
    created_at: Date
  
    @UpdateDateColumn()
    updated_at: Date
  
}