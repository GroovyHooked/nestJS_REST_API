import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
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
            select: ["name", "motorization", "brand", "model", "mileage"],
            where: [{ "id": _id }],
        });
    }

    async getScooterWithRepairs(_id: number): Promise<Scooter> {
        return createQueryBuilder("scooter")
            .leftJoinAndSelect("Scooter.repairs", "repair", "scooter.id = repair.scooterId")
            .where("scooter.id = :id", { id: _id })
            .getOne() as Promise<Scooter>
    }

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
