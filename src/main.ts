import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import { createQueryBuilder } from 'typeorm';
import { AppModule } from './app.module';

const port = process.env.PORT || 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Reparations')
    .setDescription('List of commands to manipulate the database')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  await app.listen(port);
}
bootstrap();

/*const user = createQueryBuilder("scooters")
    .leftJoinAndSelect("sc.photos", "photo")
    .where("user.name = :name", { name: "Timber" })
    .getOne();*/