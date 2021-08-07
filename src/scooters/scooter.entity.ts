import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Repair } from "src/repairs/repair.entity";

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

    /*@ApiProperty()
    @OneToOne( () => Repair, repair => repair.scooter)
    repair: Repair[];*/

}