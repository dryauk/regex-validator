import { Logger } from '@nestjs/common';

import { bootstrapWorker } from './main';

bootstrapWorker().then(({ env }) => {
  const logger = new Logger('bootstrap');
  logger.log(`📟 Worker started in ${env} mode`);
});
