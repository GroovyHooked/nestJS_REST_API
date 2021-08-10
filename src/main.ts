import { NestFactory } from '@nestjs/core';
<<<<<<< HEAD
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

=======
import { DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import { createQueryBuilder } from 'typeorm';
import { AppModule } from './app.module';

const port = process.env.PORT || 3000

>>>>>>> 8d08210cd958c78298cb3ae19eb62deb8fc37b34
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
<<<<<<< HEAD
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);


  await app.listen(3000);
}
bootstrap();
=======
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
>>>>>>> 8d08210cd958c78298cb3ae19eb62deb8fc37b34
