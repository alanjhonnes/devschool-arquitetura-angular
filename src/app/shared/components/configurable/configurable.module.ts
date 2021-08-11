import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurableComponent } from './configurable/configurable.component';
import {
  CONFIG_TOKEN,
  DEFAULT_CONFIG,
  ComponentConfig,
} from './configuration.const';

@NgModule({
  declarations: [ConfigurableComponent],
  imports: [CommonModule],
  exports: [ConfigurableComponent],
  providers: [
    {
      provide: CONFIG_TOKEN,
      useValue: DEFAULT_CONFIG,
    },
  ],
})
export class ConfigurableModule {
  public static forRoot(
    config: ComponentConfig
  ): ModuleWithProviders<ConfigurableModule> {
    return {
      ngModule: ConfigurableModule,
      providers: [
        {
          provide: CONFIG_TOKEN,
          useValue: config,
        },
      ],
    };
  }
}
