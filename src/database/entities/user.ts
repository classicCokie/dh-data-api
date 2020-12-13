import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";
import { MinLength, MaxLength } from "class-validator";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @MinLength(3, {
        message: "Name is too short",
    })
    @MaxLength(50, {
        message: "Name is too long",
    })
    name: string;
}
