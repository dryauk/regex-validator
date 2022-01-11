import { Logger } from '@nestjs/common';

import { bootstrapApi } from './main';

bootstrapApi().then(({ env, url }) => {
  const logger = new Logger('bootstrap');
  logger.log(`🚀 App is running on ${url} in ${env} mode`);
});
