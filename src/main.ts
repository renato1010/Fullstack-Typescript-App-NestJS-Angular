import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';
import { from } from 'rxjs';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // helmet security-related HTTP headers
  app.use(helmet());
  // define a global validation pipe
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(process.env.PORT);
}
bootstrap();
