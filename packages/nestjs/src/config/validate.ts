import { Logger } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';

import { Environment } from './Environment';

export const validate = (config: Record<string, unknown>): Environment => {
  const validatedConfig = plainToClass(Environment, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length) {
    const logger = new Logger('Environment');
    const message = 'Environment has failed the validation';

    const details = errors.map(({ property, constraints }) => {
      const msg =
        constraints && Object.values(constraints).length
          ? Object.values(constraints)
              .map(msg => msg.replaceAll(property, '').trim())
              .join(', ')
          : 'is not valid';

      return `\n  - ${property}: ${msg}`;
    });

    logger.error(message + details);
    throw new Error(message);
  }

  return validatedConfig;
};
