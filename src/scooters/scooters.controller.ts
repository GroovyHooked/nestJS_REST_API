import { Controller, Post, Body, Get, Put, Delete, Param, Query } from '@nestjs/common';
<<<<<<< HEAD
import { ApiTags, ApiOperation, ApiBody, ApiCreatedResponse, ApiResponse, ApiOkResponse, ApiQuery, ApiParam } from '@nestjs/swagger';
import { query } from 'express';
import { type } from 'os';
=======
import { ApiTags, ApiOperation, ApiBody, ApiCreatedResponse, ApiResponse, ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { Crud ,CrudController } from '@nestjsx/crud';
>>>>>>> 8d08210cd958c78298cb3ae19eb62deb8fc37b34
import { Scooter } from './scooter.entity';
import { ScootersService } from './scooters.service';


<<<<<<< HEAD
@ApiTags('Scooters')
@Controller('scooters')
export class ScootersController {
=======
@ApiTags('scooters')
@Crud({
    model: {
        type: Scooter
    }
})
@Controller('scooters')
export class ScootersController implements CrudController<Scooter>{
>>>>>>> 8d08210cd958c78298cb3ae19eb62deb8fc37b34
    constructor(public service: ScootersService){}

    @Get()
    all() {
        return this.service.getScooters()
    }
    
    @Get(':id')
    @ApiQuery({ name: 'withRepairs', allowEmptyValue: true, example: '1' })
    get(@Param() params, @Query('withRepairs') withRepairs: String) {
        if (withRepairs) {
<<<<<<< HEAD
            return this.service.getScooterWithRepairs2(params.id);
=======
            return this.service.getScooterWithRepairs(params.id);
>>>>>>> 8d08210cd958c78298cb3ae19eb62deb8fc37b34
        }
        return this.service.getScooter(params.id);
    }

<<<<<<< HEAD
    @ApiCreatedResponse({ description: "Scooter row generated in database" })
    @Post()
    create(@Body() scooter: Scooter) {
        return this.service.createScooter(scooter);
    }
    
    @Post(':name/:motorization/:brand/:model/:mileage/:name/:description/:price')
    insertScootAndRepair(@Param() params){
        return this.service.insertScooterWithRepair(params.name, params.motorization, params.brand, params.model, params.mileage, params.name, params.description, params.price)
    }
=======
    @Post()
    @ApiBody({description: "test de description"})
    @ApiCreatedResponse({ description: "Generate a scooter database row" })
    @ApiOkResponse({ description: "Item created"})
    create(@Body() scooter: Scooter) {
        return this.service.createScooter(scooter);
    }
>>>>>>> 8d08210cd958c78298cb3ae19eb62deb8fc37b34

    @Put()
    update(@Body() scooter: Scooter) {
        return this.service.updateScooter(scooter);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.service.deleteScooter(params.id);
    }
}
<<<<<<< HEAD

function RequestParam() {
    throw new Error('Function not implemented.');
}
=======
>>>>>>> 8d08210cd958c78298cb3ae19eb62deb8fc37b34
   