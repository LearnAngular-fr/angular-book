import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Person} from "../person";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit, AfterViewInit {

  model:Person;

  colors:string[];

  @ViewChild('monForm') monForm: NgForm;


  constructor() { }

  ngOnInit() {
    // Nous pouvions également appeler d'un service ...
    this.colors=['','rouge','jaune','vert','bleu'];
    this.model=new Person();

  }

  ngAfterViewInit() {
    if (this.monForm) {
      this.monForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }


  onValueChanged(data?: any) {



    if (!this.monForm) { return; }
    const form = this.monForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);


      if (control && control.dirty && !control.valid) {


        console.log(control);

        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }

  }


  validationMessages = {
    'firstName': {
      'required':      'Prénom est obligatoire.',
      'minlength':     'Prénom doit faire 3 caractères minimum.'
    },
    'lastName': {
      'required':      'Nom est obligatoire.',
      'minlength':     'Nom doit faire 3 caractères minimum.'
    },
    'favoriteColor': {
      'required':      'Couleur favorite est obligatoire.'
    },
    'phoneNumber' : {
      'validateMobileNumber': 'Ce n\'est pas un numéro de portable.',
      'required':      'Numéro de mobile est obligatoire.'
    }
  };


  formErrors = {
    'firstName': '',
    'lastName': '',
    'favoriteColor': '',
    'phoneNumber': ''

  };


  onSubmit() {
    console.log(`soumission du model ${JSON.stringify(this.model)}`);
  }

}
