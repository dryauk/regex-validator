import { DynamicModule, Module } from '@nestjs/common';

import { AppController } from './App.controller';
import { ConfigModule } from './config/Config.module';

@Module({
  imports: [ConfigModule.forRoot()],
})
export class AppModule {
  public static forApi(): DynamicModule {
    return {
      module: AppModule,
      controllers: [AppController],
    };
  }

  public static forWorker(): DynamicModule {
    return {
      module: AppModule,
    };
  }
}
