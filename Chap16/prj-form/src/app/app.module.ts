import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonFormReactiveComponent } from './person-form-reactive/person-form-reactive.component';
import { MobileNumberValidator } from './customValidators';
import { MobileNumberAsyncValidator } from './async-custom-validators';

@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    PersonFormReactiveComponent,
    MobileNumberValidator,
    MobileNumberAsyncValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
