import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Scooter } from "src/scooters/scooter.entity";
import { type } from "os";

@Entity()
export class Repair {

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column()
    description: string;

    @ApiProperty()
    @Column()
    price: number;

    @ApiProperty()
    scooterId: number;
    @OneToOne( () => Scooter, {
        cascade: true
    })
    @JoinColumn({name: "scooterId"})
    scooter: Scooter[];
}