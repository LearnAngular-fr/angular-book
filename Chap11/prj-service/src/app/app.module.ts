import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LoggerService} from './logger.service';
import {Component1} from './component1.component';
import {Component3} from './component3.component';
import {Component2} from './component2.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1, Component2, Component3
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
