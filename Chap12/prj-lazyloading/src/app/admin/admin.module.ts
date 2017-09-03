import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {HomeAdminComponent} from '../home-admin/home-admin.component';
import {LogService, SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  providers: [],
  declarations: [HomeAdminComponent]
})
export class AdminModule {

  constructor(private logger: LogService) { }

}
