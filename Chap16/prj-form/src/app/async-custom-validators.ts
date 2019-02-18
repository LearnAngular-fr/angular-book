import {AbstractControl, Validator, NG_ASYNC_VALIDATORS} from '@angular/forms';
import {Directive, Input} from '@angular/core';
import { Observable, of } from 'rxjs';


const PORTABLE_REGEXP = /^(06|07)\d{8}$/;

export class CustomAsyncValidators {

  static asyncMobileNumber(control: AbstractControl): Observable<{[key: string]: boolean}>{

    return PORTABLE_REGEXP.test(control.value) ? of(null) : of({validateAsyncMobileNumber: true});
 }

}

// tslint:disable:directive-selector
@Directive({
  selector: '[validateAsyncMobileNumber][formControlName],[validateAsyncMobileNumber][formControl],[validateAsyncMobileNumber][ngModel]',
  providers: [
    { provide: NG_ASYNC_VALIDATORS, useExisting: MobileNumberAsyncValidator, multi: true }
  ]
})
export class MobileNumberAsyncValidator implements Validator{

  private enabled: boolean;


  @Input()
  set validateAsyncMobileNumber(value: boolean|string) {
    this.enabled = value === '' || value === true || value === 'true';
   // if (this._onChange) this._onChange();
  }

  validate(c: AbstractControl): Observable<{[key: string]: any}> {
    if (this.enabled) {
      return CustomAsyncValidators.asyncMobileNumber(c);
    } else {
      return of(null);
    }
  }

}
