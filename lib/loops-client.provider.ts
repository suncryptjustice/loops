import { Provider } from '@nestjs/common';
import { LOOPS_CLIENT_API_KEY } from './loops-client.constants';
import { LoopsClientModuleOptions } from './loops-client.types';
import { getHttpClientModuleOptions } from './utils';

export function createLoopsClientProvider(
  options: LoopsClientModuleOptions,
): Provider {
  return {
    provide: LOOPS_CLIENT_API_KEY,
    useValue: getHttpClientModuleOptions(options),
  };
}
