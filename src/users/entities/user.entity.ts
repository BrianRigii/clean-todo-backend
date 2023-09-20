
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    
    
}