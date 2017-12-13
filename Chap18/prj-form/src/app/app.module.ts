import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonFormComponent } from './person-form-reactive/person-form.component'; // './person-form/person-form.component';
import {MobileNumberValidator} from './customs-validators';
import {MobileNumberAsyncValidator} from './async-custom-validators';


@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    MobileNumberValidator,
    MobileNumberAsyncValidator
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
