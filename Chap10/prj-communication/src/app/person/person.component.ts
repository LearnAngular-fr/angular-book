import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'person',
  template: `
    <div *ngIf="!disable" [ngClass]="{'color': color}">
      <h1>{{person.name}} {{person.lastname}}</h1>
      <button (click)="choose()">Choisir</button>
      <hr>
    </div>

  `,
  styles: ['.color {color: red;}']
})
export class PersonComponent {

  private _person: any;

  color: boolean = false;

  @Input()
  private disable: boolean = false;

  @Output()
  onChoose = new EventEmitter<boolean>();

  @Input()
  set person(person: any) {

    if (person && typeof person.name === 'string') {
      person.name = this.capitalizeFirstLetter(person.name);
    }
    this._person = person;
  }

  get person(): any {

    if (this._person && typeof this._person.lastname === 'string') {
      this._person.lastname = this.capitalizeFirstLetter(this._person.lastname);
    }
    return this._person;
  }


  private capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  public choose(): void {
    this.onChoose.emit(this._person);
  }

  public colorOn(): void {
    this.color = !this.color;
  }

}
