import {AbstractControl, Validators, NG_VALIDATORS, Validator} from '@angular/forms';
import {Directive, Input, forwardRef} from '@angular/core';


const PORTABLE_REGEXP = /^(06|07)\d{8}$/;

export class CustomsValidators {

  static mobileNumber(control: AbstractControl): {[key: string]: boolean} {
    return PORTABLE_REGEXP.test(control.value) ? null : {validateMobileNumber: true};
  }

}


@Directive({
  selector: '[validateMobileNumber][formControlName],[validateMobileNumber][formControl],[validateMobileNumber][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: MobileNumberValidator, multi: true }
  ]
})
export class MobileNumberValidator implements Validator {

  private _enabled: boolean;


  @Input()
  set validateMobileNumber(value: boolean|string) {
    console.log('titi');
    this._enabled = value === '' || value === true || value === 'true';
   // if (this._onChange) this._onChange();
  }

  validate(c: AbstractControl): {[key: string]: any} {
    console.log('too');
    return this._enabled ? CustomsValidators.mobileNumber(c) : null;
  }

}
