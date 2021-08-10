import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
<<<<<<< HEAD
import { ApiTags } from '@nestjs/swagger';
import { Repair } from './repair.entity';
import { RepairsService } from './repairs.service';

@ApiTags('Réparations')
@Controller('repairs')
export class RepairsController {
=======
import { Crud ,CrudController } from '@nestjsx/crud';
import { Repair } from './repair.entity';
import { RepairsService } from './repairs.service';

@Crud({
    model: {
        type: Repair
    }
})
@Controller('repairs')
export class RepairsController implements CrudController<Repair>{
>>>>>>> 8d08210cd958c78298cb3ae19eb62deb8fc37b34
    
    constructor(public service: RepairsService){}
    
    @Get()
    all() {
        return this.service.getRepairs()
    }
    
    @Get(':id')
    get(@Param() params) {
        return this.service.getRepair(params.id);
    }

    @Post()
    create(@Body() repair: Repair) {
        return this.service.createRepair(repair);
    }

    @Put()
    update(@Body() repair: Repair) {
        return this.service.updateRepair(repair);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.service.deleteRepair(params.id);
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 8d08210cd958c78298cb3ae19eb62deb8fc37b34
