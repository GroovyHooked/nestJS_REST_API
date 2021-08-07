import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScootersModule } from './scooters/scooters.module';
import { RepairsModule } from './repairs/repairs.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ScootersModule,
    RepairsModule
  ]
})
export class AppModule {}
