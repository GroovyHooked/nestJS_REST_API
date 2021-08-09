import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
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

    @Get()
    all() {
        return this.service.getScooters()
    }
    
    @Get(':id')
    get(@Param() params) {
        return this.service.getScooter(params.id);
    }

    @Post()
    @ApiBody({description: "test de déscription"})
    @ApiCreatedResponse({ description: "Generate a scooter database row" })
    @ApiOkResponse({ description: "Item created"})
    create(@Body() scooter: Scooter) {
        return this.service.createScooter(scooter);
    }

    @Put()
    update(@Body() scooter: Scooter) {
        return this.service.updateScooter(scooter);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.service.deleteScooter(params.id);
    }
}
   