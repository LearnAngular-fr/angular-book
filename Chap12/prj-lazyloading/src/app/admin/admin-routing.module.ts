import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';

const routes: Routes = [
  {path: '', redirectTo: 'homeAdmin', pathMatch: 'full'},
  {path: 'homeAdmin', component: HomeAdminComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
