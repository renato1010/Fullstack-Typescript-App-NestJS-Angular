import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FinestModule } from './finest/finest.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './services/config/config.service';

@Module({
  imports: [
    FinestModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
