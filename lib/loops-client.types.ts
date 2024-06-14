import { ModuleMetadata, Type } from '@nestjs/common';

export interface LoopsClientModuleOptions {
  apiKey: string;
}

export interface LoopsClientModuleFactory {
  createLoopsModuleOptions: () => LoopsClientModuleOptions;
}

export interface LoopsClientModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useClass?: Type<LoopsClientModuleFactory>;
  useExisting?: Type<LoopsClientModuleFactory>;
  useFactory?: (...args: any[]) => LoopsClientModuleOptions;
}
