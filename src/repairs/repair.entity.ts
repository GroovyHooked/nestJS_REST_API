import { Column, Entity, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Scooter } from "src/scooters/scooter.entity";

@Entity("repair")
export class Repair {

    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

<<<<<<< HEAD
    @ApiProperty({
        description: 'The name of the owner'
      })
=======
    @ApiProperty()
>>>>>>> 8d08210cd958c78298cb3ae19eb62deb8fc37b34
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

    @ManyToOne( type => Scooter, scooter => scooter.repairs)
    @JoinColumn({ name: "scooterId"})
    scooter: Scooter;

}