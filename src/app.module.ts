import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { ScootersModule } from './scooters/scooters.module';
import { RepairsModule } from './repairs/repairs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
=======
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScootersModule } from './scooters/scooters.module';
import { RepairsModule } from './repairs/repairs.module';
>>>>>>> 8d08210cd958c78298cb3ae19eb62deb8fc37b34

@Module({
  imports: [
    TypeOrmModule.forRoot(),
<<<<<<< HEAD
    ScootersModule, 
    RepairsModule]
=======
    ScootersModule,
    RepairsModule
  ]
>>>>>>> 8d08210cd958c78298cb3ae19eb62deb8fc37b34
})
export class AppModule {}
