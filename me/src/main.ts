import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// instance of nest with provider rootModule
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
// called when new instance of nest created
bootstrap();
