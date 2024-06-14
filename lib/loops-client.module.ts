import { DynamicModule, Global, Module, Provider, Type } from '@nestjs/common';
import {
  LOOPS_CLIENT_API_KEY,
  LOOPS_CLIENT_MODULE_OPTIONS,
} from './loops-client.constants';
import {
  LoopsClientModuleAsyncOptions,
  LoopsClientModuleFactory,
  LoopsClientModuleOptions,
} from './loops-client.types';
import { createLoopsClientProvider } from './loops-client.provider';
import { getHttpClientModuleOptions } from './utils';
import { LoopsClientService } from './loops-client.service';

@Global()
@Module({})
export class LoopsClientModule {
  public static forRoot(options: LoopsClientModuleOptions): DynamicModule {
    const provider: Provider = createLoopsClientProvider(options);
    return {
      module: LoopsClientModule,
      providers: [provider, LoopsClientService],
      exports: [provider, LoopsClientService],
    };
  }

  public static forRootAsync(
    options: LoopsClientModuleAsyncOptions,
  ): DynamicModule {
    const provider: Provider = {
      inject: [LOOPS_CLIENT_MODULE_OPTIONS],
      provide: LOOPS_CLIENT_API_KEY,
      useFactory: async (options: LoopsClientModuleOptions) =>
        getHttpClientModuleOptions(options),
    };

    return {
      module: LoopsClientModule,
      imports: options.imports,
      providers: [
        ...this.createAsyncProviders(options),
        provider,
        LoopsClientService,
      ],
      exports: [provider, LoopsClientService],
    };
  }

  private static createAsyncProviders(
    options: LoopsClientModuleAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }

    const useClass = options.useClass as Type<LoopsClientModuleFactory>;

    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: useClass,
        useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(
    options: LoopsClientModuleAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: LOOPS_CLIENT_MODULE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    const inject = [
      (options.useClass ||
        options.useExisting) as Type<LoopsClientModuleFactory>,
    ];

    return {
      provide: LOOPS_CLIENT_MODULE_OPTIONS,
      useFactory: async (optionsFactory: LoopsClientModuleFactory) =>
        await optionsFactory.createLoopsModuleOptions(),
      inject,
    };
  }
}
