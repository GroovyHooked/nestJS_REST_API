import { Column, Entity, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Scooter } from "src/scooters/scooter.entity";

@Entity()
export class Repair {

    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @ApiProperty()
    @Column({ type: "varchar", length: 25 })
    name: string;

    @ApiProperty()
    @Column({ type: "varchar", length: 255 })
    description: string;

    @ApiProperty()
    @Column()
    price: number;

    @ApiProperty()
    @Column()
    scooterId: number;
    @ManyToOne(() => Scooter, scooter => scooter.repair)
    @JoinColumn({ name: "scooterId"})
    scooter: Scooter;

}