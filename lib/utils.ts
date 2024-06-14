// Internal.
import { LoopsClientModuleOptions } from './loops-client.types';
import { LoopsClientService } from './loops-client.service';

// Code.
export const getHttpClientModuleOptions = (
  options: LoopsClientModuleOptions,
): LoopsClientService => new LoopsClientService(options);
