import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
<<<<<<< HEAD
import { Repair } from 'src/repairs/repair.entity';
import { createQueryBuilder, Repository, createConnection } from 'typeorm';
import { Scooter } from './scooter.entity';

@Injectable()
export class ScootersService {

    constructor(@InjectRepository(Scooter) public scootersRepo: Repository<Scooter> ){}

     getScooters(): Promise<Scooter[]> {
        return  this.scootersRepo.find();
    }

     getScooter(_id: number): Promise<Scooter> {
        return  this.scootersRepo.findOne({
=======
import { createQueryBuilder, Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Scooter } from './scooter.entity';
import { Repair } from 'src/repairs/repair.entity';

@Injectable()
export class ScootersService extends TypeOrmCrudService<Scooter> {

    constructor(@InjectRepository(Scooter) public scootersRepo: Repository<Scooter> ){
        super(scootersRepo)
    }

    async getScooters(): Promise<Scooter[]> {
        return await this.scootersRepo.find();
    }

    async getScooter(_id: number): Promise<Scooter> {
        return await this.scootersRepo.findOne({
>>>>>>> 8d08210cd958c78298cb3ae19eb62deb8fc37b34
            select: ["name", "motorization", "brand", "model", "mileage"],
            where: [{ "id": _id }],
        });
    }
<<<<<<< HEAD
    /*getRepairs() {
        const qb = this.scootersRepo.createQueryBuilder('repairs');
        return qb.getMany();
        
        console.log(qb.getMany());
    }*/

=======
>>>>>>> 8d08210cd958c78298cb3ae19eb62deb8fc37b34

    async getScooterWithRepairs(_id: number): Promise<Scooter> {
        return createQueryBuilder("scooter")
            .leftJoinAndSelect("Scooter.repairs", "repair", "scooter.id = repair.scooterId")
            .where("scooter.id = :id", { id: _id })
            .getOne() as Promise<Scooter>
    }

<<<<<<< HEAD
    getScooterWithRepairs2(_id: number) {
        return createQueryBuilder("scooter")
            .leftJoinAndSelect("Scooter.repairs", "repair", "scooter.id = repair.scooterId")
            .where("scooter.id = :id", { id: _id })
            .getOne() 
    }

    async insertScooterWithRepair(
        name: string,
        motorization: string,
        brand: string,
        model: string,
        mileage: number,
        repairName: string,
        description: string,
        price: number,
        )
        {
                
                let newScooter = new Scooter();
                newScooter.name = name;
                newScooter.motorization = motorization;
                newScooter.brand = brand;
                newScooter.model = model;
                newScooter.mileage = mileage;
                
                let newRepair = new Repair();
                newRepair.name = repairName;
                newRepair.description = description;
                newRepair.price = price;


                this.scootersRepo.save(newScooter);
                this.scootersRepo.createQueryBuilder('repairs')
                                .insert()
                                .into(Repair)
                                .values({
                                    id: 3,
                                    name: newRepair.name,
                                    description: newRepair.description,
                                    price: newRepair.price,
                                    scooterId: 2
                                })
                                .execute();

                console.log('Processed')
            
        
    }

=======
>>>>>>> 8d08210cd958c78298cb3ae19eb62deb8fc37b34
    async createScooter(scooter: Scooter) {
        this.scootersRepo.insert(scooter)
    }

    async updateScooter(scooter: Scooter) {
        this.scootersRepo.save(scooter)
    }

    async deleteScooter(scooter: Scooter) {
        this.scootersRepo.delete(scooter);
    }
}
