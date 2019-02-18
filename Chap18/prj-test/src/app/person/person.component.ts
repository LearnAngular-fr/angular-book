import { Component, Input, Output, EventEmitter } from '@angular/core';


export class Person {

  constructor(public firstname: string, public lastname: string,
              public city: string) {
  }
}

@Component({
  selector: 'person',
  template: `<h1 (click)="click()">
      {{person.firstname + ' ' + person.lastname}}
  </h1><br/>
  <h2>{{person.city}}</h2>`
})
export class PersonComponent {

  @Input() person: Person;
  @Output() selected = new EventEmitter<Person>();

  click(): void {
    this.selected.emit(this.person);
  }

}
