import { IsEnum, IsNumber } from 'class-validator';

import { Env } from './constants';

export class Environment {
  @IsEnum(Env)
  public readonly NODE_ENV: Env = Env.development;

  @IsNumber()
  public readonly PORT: number = 3000;
}
