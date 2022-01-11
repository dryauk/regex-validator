import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './App.module';
import { Configuration, Env } from './config';

async function getUrl(app: INestApplication): Promise<string> {
  const url = await app.getUrl();
  return url.replace('[::1]', 'localhost');
}

export async function bootstrapApi(): Promise<{ env: Env; url: string }> {
  const app = await NestFactory.create(AppModule.forApi());
  const config = new Configuration(app.get(ConfigService));

  await app.listen(config.PORT);

  return {
    env: config.ENV,
    url: await getUrl(app),
  };
}

export async function bootstrapWorker(): Promise<{ env: Env }> {
  const app = await NestFactory.create(AppModule.forWorker());
  const config = new Configuration(app.get(ConfigService));

  await app.init();

  return {
    env: config.ENV,
  };
}
