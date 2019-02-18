import {Component} from '@angular/core';

@Component({
  selector: 'car',
  template: `
    <h1><span> Clignolant gauche : {{blinkerLeft}} </span> // <span> Clignolant droit : {{blinkerRight}} </span></h1>
    <h1><span> Porte gauche : {{doorLeft}}  </span> // <span> Porte droite : {{doorRight}}</span></h1>

     <ng-content select="constructor"></ng-content>
  `
})
export class CarComponent {

  public blinkerLeft: boolean;
  public blinkerRight: boolean;
  public doorLeft: boolean;
  public doorRight: boolean;


  constructor() {
    this.blinkerLeft = false;
    this.blinkerRight = false;
    this.doorLeft = false;
    this.doorRight = false;
  }


  blinkerLeftSwitch(): void {
    this.blinkerLeft = !this.blinkerLeft;
  }

  blinkerRightSwitch(): void {
    this.blinkerRight = !this.blinkerRight;
  }

  doorLeftSwitch(): void {
    this.doorLeft = !this.doorLeft;
  }

  doorRightSwitch(): void {
    this.doorRight = !this.doorRight;
  }

}
