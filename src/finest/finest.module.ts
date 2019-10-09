import { Module, HttpModule } from '@nestjs/common';
import { FinestController } from './controllers/finest/finest.controller';
import { IexService } from './services/iex/iex.service';

@Module({
  controllers: [FinestController],
  imports: [HttpModule],
  providers: [IexService],
})
export class FinestModule {}
