import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Scooter {

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column()
    motorization: string;

    @ApiProperty()
    @Column()
    brand: string;

    @ApiProperty()
    @Column()
    model: string

    @ApiProperty()
    @Column()
    mileage: number;

}