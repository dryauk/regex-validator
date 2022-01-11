import { Env } from './constants';

export class Config {
  public static get ENV(): Env {
    switch (process.env.NODE_ENV) {
      case Env.production:
        return Env.production;

      case Env.test:
        return Env.test;

      case Env.development:
      default:
        return Env.development;
    }
  }
}
