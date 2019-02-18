import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonComponent } from './mon-component.component';
import { MonServiceConfig } from './mon-service.service';
import { MonAutreServiceConfig } from './mon-autre-service.service';

@NgModule({
  declarations: [MonComponent],
  imports: [
    CommonModule
  ],
  exports : [MonComponent],
})
export class MonModule {

  static forRoot(monServiceConfig: MonServiceConfig, monAutreServiceConfig: MonAutreServiceConfig): ModuleWithProviders {
    return {
      ngModule: MonModule,
      providers: [
        { provide: MonServiceConfig, useValue: monServiceConfig },
        { provide: MonAutreServiceConfig, useValue: monAutreServiceConfig }
      ]
    };
  }
}
