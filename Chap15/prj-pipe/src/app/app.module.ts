import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PurePipe } from './pure.pipe';
import { PureObjectPipe } from './pure-object.pipe';
import { ImpureObjectPipe } from './impure-object.pipe';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { InjectablePipe } from './injectable.pipe';
import { ForexEchangePipe } from './forex-echange.pipe';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    PurePipe,
    PureObjectPipe,
    ImpureObjectPipe,
    ForexEchangePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [InjectablePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
