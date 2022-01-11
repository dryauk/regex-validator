import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigModule as CoreConfigModule } from '@nestjs/config';

import { Configuration } from './Configuration';
import { validate } from './validate';

@Global()
@Module({})
export class ConfigModule {
  public static forRoot(): DynamicModule {
    return {
      module: ConfigModule,
      imports: [
        CoreConfigModule.forRoot({
          isGlobal: true,
          cache: true,
          validate,
        }),
      ],
      providers: [Configuration],
      exports: [Configuration],
    };
  }
}
