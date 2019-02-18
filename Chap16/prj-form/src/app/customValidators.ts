import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Directive, Input } from '@angular/core';

const PORTABLE_REGEXP = /^(06|07)\d{8}$/;

export class CustomValidators {

  static mobileNumber(control: AbstractControl): { [key: string]: boolean } {
    return PORTABLE_REGEXP.test(control.value) ? null : {validateMobileNumber: true};
  }

}

// tslint:disable:directive-selector
@Directive({
  selector: '[validateMobileNumber][formControlName],[validateMobileNumber][formControl],[validateMobileNumber][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: MobileNumberValidator, multi: true}
  ]
})
export class MobileNumberValidator implements Validator {

  private enabled: boolean;

  @Input()
  set validateMobileNumber(value: boolean | string) {
    this.enabled = value === '' || value === true || value === 'true';
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.enabled ? CustomValidators.mobileNumber(c) : null;
  }

}