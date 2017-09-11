import {AbstractControl, Validator, NG_ASYNC_VALIDATORS} from "@angular/forms";
import {Directive, Input} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';


const PORTABLE_REGEXP = /^(06|07)\d{8}$/;

export class CustomAsyncValidators {

  static asyncMobileNumber(control: AbstractControl): Observable<{[key: string]: boolean}>{

    return PORTABLE_REGEXP.test(control.value) ? Observable.of(null) : Observable.of({validateMobileNumber: true});
 }

}


@Directive({
  selector: '[validateAsyncMobileNumber][formControlName],[validateAsyncMobileNumber][formControl],[validateAsyncMobileNumber][ngModel]',
  providers: [
    { provide: NG_ASYNC_VALIDATORS, useExisting: MobileNumberAsyncValidator, multi: true }
  ]
})
export class MobileNumberAsyncValidator implements Validator{

  private _enabled: boolean;


  @Input()
  set validateAsyncMobileNumber(value: boolean|string) {
    this._enabled = value === '' || value === true || value === 'true';
   // if (this._onChange) this._onChange();
  }

  validate(c: AbstractControl): Observable<{[key: string]: any}> {
    if(this._enabled) {
      return CustomAsyncValidators.asyncMobileNumber(c)
    } else {
      return null;
    }
  }

}
