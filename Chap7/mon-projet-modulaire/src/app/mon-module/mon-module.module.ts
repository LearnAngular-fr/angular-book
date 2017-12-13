import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonComponent } from './mon-component.component';
import { MonService, MonServiceConfig } from './mon-service.service';
import { MonAutreServiceConfig, MonAutreService } from './mon-autre-service.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MonComponent],
  exports : [MonComponent],
  providers : [MonService, MonAutreService]
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
