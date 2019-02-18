import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Person } from '../person';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit, AfterViewInit {

  model: Person;

  colors: string[];

  @ViewChild('monForm') monForm: NgForm;

  validationMessages = {
    firstName: {
      required: 'Prénom est obligatoire.',
      minlength: 'Prénom doit faire 3 caractères minimum.'
    },
    favoriteColor: {
      required: 'Couleur favorite est obligatoire.'
    },
    phoneNumber2: {
      validateAsyncMobileNumber: 'Ce n\'est pas un numéro de portable'
    }
  };

  formErrors = {
    firstName: '',
    favoriteColor: '',
    phoneNumber2: ''

  };

  constructor() {
  }

  ngOnInit() {
    // Nous pouvions également appeler d'un service ...
    this.colors = ['', 'rouge', 'jaune', 'vert', 'bleu'];
    this.model = new Person();
  }

  ngAfterViewInit() {
    if (this.monForm) {
      this.monForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {

    if (!this.monForm) {
      return;
    }
    const form = this.monForm.form;

    for (const field in this.formErrors) {
      // On supprime le message éventuel
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }

  };


  onSubmit() {
    console.log(`soumission du model ${JSON.stringify(this.model)}`);
  }

}
