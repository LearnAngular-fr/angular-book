import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../customValidators';
import { CustomAsyncValidators } from '../async-custom-validators';


@Component({
  selector: 'app-person-form-reactive',
  templateUrl: './person-form-reactive.component.html',
  styleUrls: ['./person-form-reactive.component.css']
})
export class PersonFormReactiveComponent implements OnInit {

  personForm: FormGroup;

  colors: string[];

  validationMessages = {
    firstName: {
      required: 'Prénom est obligatoire.',
      minlength: 'Prénom doit faire 3 caractères minimum.'
    },
    lastName: {
      required: 'Nom est obligatoire.',
      minlength: 'Nom doit faire 3 caractères minimum.'
    },
    favoriteColor: {
      required: 'Couleur favorite est obligatoire.'
    },
    phoneNumber : {
      validateMobileNumber: 'Ce n\'est pas un numéro de portable.'
    },
    phoneNumber2 : {
      validateMobileNumber: 'Ce n\'est pas un numéro de portable.'
    }
  };

  formErrors = {
    firstName: '',
    lastName: '',
    favoriteColor: '',
    phoneNumber: '',
    phoneNumber2: ''
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.personForm = this.fb.group({
      gender: ['', Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      favoriteColor: ['', Validators.required],
      phoneNumber: ['', CustomValidators.mobileNumber],
      phoneNumber2: ['', , CustomAsyncValidators.asyncMobileNumber],
      birthday: ''
    });
    this.colors = ['', 'rouge', 'jaune', 'vert', 'bleu'];

    this.personForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

  }

  onValueChanged(data?: any) {
    for (const field in this.personForm.controls) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = this.personForm.controls[field];

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

}
