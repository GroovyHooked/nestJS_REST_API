import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repair } from './repair.entity';

@Injectable()
export class RepairsService extends TypeOrmCrudService<Repair> {

    constructor(@InjectRepository(Repair) 
    private repairsRepo: Repository<Repair>)
    {
        super(repairsRepo)
    }
    
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
