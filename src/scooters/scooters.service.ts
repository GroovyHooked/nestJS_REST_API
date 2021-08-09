import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
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

    async getScooter(_id: number): Promise<Scooter[]> {
        return await this.scootersRepo.find({
            select: ["name", "motorization", "brand", "model", "mileage"],
            where: [{ "id": _id }]
        });
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
