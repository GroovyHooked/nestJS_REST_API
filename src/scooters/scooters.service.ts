import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Scooter } from './scooter.entity';

@Injectable()
export class ScootersService extends TypeOrmCrudService<Scooter>{
    constructor(@InjectRepository(Scooter) repo){
        super(repo)
    }
}
