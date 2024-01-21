import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';

import { AppModule } from './app.module';

export const VITE_PLUGIN_NODE = NestFactory.create(
  AppModule,
  new ExpressAdapter(),
);

async function bootstrap() {
  const app = await VITE_PLUGIN_NODE;
  await app.listen(3000);
}

if (import.meta.env.PROD) {
  bootstrap();
}
