import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';
import { from } from 'rxjs';
import { AppModule } from './app.module';
import { ConfigService } from './services/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // helmet security-related HTTP headers
  app.use(helmet());
  // define a global validation pipe
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  // tslint:disable-next-line:no-console
  console.log('envPort: ', new ConfigService().get('PORT'));
  await app.listen(new ConfigService().get('PORT'));
}
bootstrap();
