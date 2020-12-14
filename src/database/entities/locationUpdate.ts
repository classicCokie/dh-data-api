import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne,
} from "typeorm";
import { IsNotEmpty } from "class-validator";
import { User } from "./user";

@Entity()
export class LocationUpdate extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    userId: number;

    @Column()
    @IsNotEmpty()
    lat: number;

    @Column()
    @IsNotEmpty()
    long: number;

    @Column()
    @IsNotEmpty()
    radius: number;

    @ManyToOne(() => User, (user) => user.locationUpdates)
    user: User;
}
