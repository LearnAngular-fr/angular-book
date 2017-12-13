import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {Page1Component} from './page1/page1.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'page1', component: Page1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
