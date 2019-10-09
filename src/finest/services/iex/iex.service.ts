import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class IexService {
  baseUrl = 'https://api.iextrading.com/1.0';
  iexCloud = 'https://cloud.iexapis.com/stable';
  constructor(private httpService: HttpService) {}

  getCompanyData(symbol: string) {
    return (
      this.httpService
        // .get(`${this.baseUrl}/stock/${symbol}/company`)
        .get(
          `${this.iexCloud}/stock/${symbol}/company?token=pk_84f9cf9bb0e64deda816b46cbf12577b`,
        )
        .toPromise()
    );
  }
}
