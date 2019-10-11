import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '../../../../../services/config/config.service';

@Injectable()
export class IexService {
  baseUrl = 'https://api.iextrading.com/1.0';
  iexCloud = 'https://cloud.iexapis.com/v1';
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async getCompanyInfo(symbol: string) {
    return (await this.httpService
      .get(
        `${
          this.iexCloud
        }/stock/${symbol}/company?token=${this.configService.get('IEX_TOKEN')}`,
      )
      .toPromise()).data;
  }

  async getCompanyNews(symbol: string) {
    const result = await this.httpService
      .get(
        `${
          this.iexCloud
        }/stock/${symbol}/news/last/last?token=${this.configService.get(
          'IEX_TOKEN',
        )}`,
      )
      .toPromise();
    return result.data.map(newsItem => ({
      ...newsItem,
      datetime: new Date(newsItem.datetime).toDateString(),
      ...(!newsItem.image && {
        image:
          'https://www.google.fr/url?sa=i&source=images&cd=&ved=2ahUKEwi9hqiIrqPjAhWSkxQKHYLACAwQjRx6BAgBEAU&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FFichier%3ANo_image_available.svg&psig=AOvVaw01Amwg6fOXWHGy1lRkMcsX&ust=1562607844721875',
      }),
    }));
  }

  async getCompanyStock(symbol: string) {
    const result = await this.httpService
      .get(
        `${
          this.iexCloud
        }/stock/${symbol}/quote/latestPrice?token=${this.configService.get(
          'IEX_TOKEN',
        )}`,
      )
      .toPromise();
    return result.data;
  }
}
