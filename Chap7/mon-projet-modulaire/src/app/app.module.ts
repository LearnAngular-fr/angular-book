import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MonModule } from './mon-module/mon-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MonModule.forRoot(
      {maValeur: 'Ma configuration'},
      {monAutreValeur: 'Mon autre configuration'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
