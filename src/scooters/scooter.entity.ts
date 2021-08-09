import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
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

    @ApiProperty()
    @OneToMany( () => Repair, repair => repair.scooter)
    repair: Repair[];

    addrepair(repair: Repair){
        if(this.repair == null){
            this.repair = Array<Repair>();
        }
        this.repair.push(repair)
    }
}