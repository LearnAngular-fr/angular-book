import {Component, ViewChild, QueryList, ViewChildren} from '@angular/core';
import {PersonComponent} from './person/person.component';
import {CarComponent} from './car/car.component';


@Component({
  selector: 'app-root',
  template: `
    <h1 *ngIf="disable">Votre personnage préféré est : {{theBest.name + ' ' + theBest.lastname}}</h1>
    <div>
      <person [person]="character" [disable]="disable" *ngFor="let character of characters; let i = index"
              (onChoose)="isElected($event)"></person>
    </div>
    <car>Clio</car>
    <div>
      <button (click)="blinkerSwitch()">Blinkers</button>
      ---
      <button (click)="doorSwitch()">Doors</button>
    </div>
    <div>
      <button (click)="color()">Coloriser</button>
    </div>

    <tabs>
      <tab [tabTitle]="'Tab 1'">Tab 1 Content</tab>
      <tab [tabTitle]="'Tab 2'">Tab 2 Content</tab>
    </tabs>
  `

})
export class AppComponent {

  @ViewChildren(PersonComponent)
  private personComponents: QueryList<PersonComponent>;

  @ViewChild(CarComponent) car: CarComponent;


  characters: Array<any> = [
    {name: 'mickey', lastname: 'mouse'},
    {name: 'donald', lastname: 'duck'},
    {name: 'pat', lastname: 'hibulaire'}];

  disable = false;

  theBest: any;

  isElected(person): void {
    this.theBest = person;
    this.disable = true;
  }

  color(): void {
    this.personComponents.forEach(person => person.colorOn());
  }

  blinkerSwitch(): void {
    this.car.blinkerLeftSwitch();
    this.car.blinkerRightSwitch();
  }

  doorSwitch(): void {
    this.car.doorLeftSwitch();
    this.car.doorRightSwitch();
  }

}
