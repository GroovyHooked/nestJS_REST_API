import { Controller, Post, Body, Get, Put, Delete, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiCreatedResponse, ApiResponse, ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { Crud ,CrudController } from '@nestjsx/crud';
import { Scooter } from './scooter.entity';
import { ScootersService } from './scooters.service';


@ApiTags('scooters')
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
    @ApiQuery({ name: 'withRepairs', allowEmptyValue: true, example: '1' })
    get(@Param() params, @Query('withRepairs') withRepairs: String) {
        if (withRepairs) {
            return this.service.getScooterWithRepairs(params.id);
        }
        return this.service.getScooter(params.id);
    }

    @Post()
    @ApiBody({description: "test de description"})
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
   