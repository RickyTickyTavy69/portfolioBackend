import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "https://rickytickytavy69.github.io"
  });
  await app.listen(5000);
}
bootstrap();
