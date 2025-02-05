import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configura Swagger
  const config = new DocumentBuilder()
    .setTitle('API NestJS')
    .setDescription('Documentazione della tua API')
    .setVersion('1.0')
    .addBearerAuth() // Per supportare l'autenticazione JWT, se usata
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
