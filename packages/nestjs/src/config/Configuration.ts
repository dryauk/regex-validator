/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Env } from './constants';

@Injectable()
export class Configuration {
  constructor(private readonly configService: ConfigService) {}

  public get ENV(): Env {
    return this.configService.get('NODE_ENV')!;
  }

  public get PORT(): number {
    return this.configService.get('PORT')!;
  }
}
