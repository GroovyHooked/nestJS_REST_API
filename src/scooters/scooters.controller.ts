import { Controller, Post, Body, Get, Put, Delete, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiCreatedResponse, ApiResponse, ApiOkResponse, ApiQuery, ApiParam } from '@nestjs/swagger';
import { query } from 'express';
import { type } from 'os';
import { Scooter } from './scooter.entity';
import { ScootersService } from './scooters.service';


@ApiTags('Scooters')
@Controller('scooters')
export class ScootersController {
    constructor(public service: ScootersService){}

    @Get()
    all() {
        return this.service.getScooters()
    }
    
    @Get(':id')
    @ApiQuery({ name: 'withRepairs', allowEmptyValue: true, example: '1' })
    get(@Param() params, @Query('withRepairs') withRepairs: String) {
        if (withRepairs) {
            return this.service.getScooterWithRepairs2(params.id);
        }
        return this.service.getScooter(params.id);
    }

    @ApiCreatedResponse({ description: "Scooter row generated in database" })
    @Post()
    create(@Body() scooter: Scooter) {
        return this.service.createScooter(scooter);
    }
    
    @Post(':name/:motorization/:brand/:model/:mileage/:name/:description/:price')
    insertScootAndRepair(@Param() params){
        return this.service.insertScooterWithRepair(params.name, params.motorization, params.brand, params.model, params.mileage, params.name, params.description, params.price)
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

function RequestParam() {
    throw new Error('Function not implemented.');
}
   