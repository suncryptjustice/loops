import { Inject } from '@nestjs/common';
import { LOOPS_CLIENT_API_KEY } from './loops-client.constants';

export function InjectLoopsClient() {
  return Inject(LOOPS_CLIENT_API_KEY);
}
