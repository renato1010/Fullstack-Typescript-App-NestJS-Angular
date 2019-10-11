import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import { join } from 'path';

@Injectable()
export class ConfigService {
  MONGODB_URI: string;
  PORT: number;
  private readonly envConfig: { [key: string]: string };
  constructor() {
    if (
      process.env.NODE_ENV === 'production' ||
      process.env.NODE_ENV === 'staging'
    ) {
      this.envConfig = {
        MONGO_URI: process.env.MONGO_URI,
        PORT: process.env.PORT,
      };
    } else {
      this.envConfig = dotenv.parse(
        fs.readFileSync('/home/renato/TypescriptDev/finest-server/.env'),
      );
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
