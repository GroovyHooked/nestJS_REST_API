import { Controller, Get } from '@nestjs/common';
import { Crud ,CrudController } from '@nestjsx/crud';
import { Scooter } from './scooter.entity';
import { ScootersService } from './scooters.service';


@Crud({
    model: {
        type: Scooter
    }
})
@Controller('scooters')
export class ScootersController implements CrudController<Scooter>{
    constructor(public service: ScootersService){}
}
   