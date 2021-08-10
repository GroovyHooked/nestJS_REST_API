import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Repair } from './repair.entity';

@Injectable()
export class RepairsService {

    constructor(@InjectRepository(Repair) 
    private repairsRepo: Repository<Repair>) { }
    
    async getRepairs(): Promise<Repair[]> {
        return await this.repairsRepo.find();
    }

    async getRepair(_id: number): Promise<Repair[]> {
        return await this.repairsRepo.find({
            select: ["name", "description", "price"],
            where: [{ "id": _id }]
        });
    }

    async createRepair(repair: Repair) {
        this.repairsRepo.insert(repair)
    }

    async updateRepair(repair: Repair) {
        this.repairsRepo.save(repair)
    }

    async deleteRepair(repair: Repair) {
        this.repairsRepo.delete(repair);
    }
}
