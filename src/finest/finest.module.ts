import { Module, HttpModule } from '@nestjs/common';
import { FinestController } from './controllers/finest/finest.controller';
import { IexService } from './controllers/finest/services/iex/iex.service';
import { ConfigService } from '../services/config/config.service';

@Module({
  controllers: [FinestController],
  imports: [HttpModule],
  providers: [IexService, ConfigService],
})
export class FinestModule {}
