import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AccueilComponent} from './accueil/accueil.component';
import {Page1Component} from './page1/page1.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    Page1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
