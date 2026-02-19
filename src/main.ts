import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  });
   app.useGlobalPipes(new ValidationPipe({
    transform: true, // Enables automatic transformation of payloads
    transformOptions: { enableImplicitConversion: true } // Infers type from the TS annotation
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
