import { Column, PrimaryGeneratedColumn } from "typeorm";

export class CreateDummyDto{
    name: string
    description: string
    age: number
    active: boolean


}