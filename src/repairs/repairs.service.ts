import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
<<<<<<< HEAD
import { Repair } from './repair.entity';

@Injectable()
export class RepairsService {

    constructor(@InjectRepository(Repair) 
    private repairsRepo: Repository<Repair>) { }
=======
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repair } from './repair.entity';

@Injectable()
export class RepairsService extends TypeOrmCrudService<Repair> {

    constructor(@InjectRepository(Repair) 
    private repairsRepo: Repository<Repair>)
    {
        super(repairsRepo)
    }
>>>>>>> 8d08210cd958c78298cb3ae19eb62deb8fc37b34
    
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
