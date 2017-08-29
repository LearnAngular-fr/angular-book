import {Component, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-comp2',
  template: `
    <button (click)="decrement()"> - </button>
    <button (click)="increment()"> + </button> `
})
export class Comp2Component {
  counterValue: number = 0;
  @Output() counterChange = new EventEmitter();

  increment() {
    this.counterValue++;
    this.counterChange.emit({value: this.counterValue});
  }

  decrement() {
    this.counterValue--;
    this.counterChange.emit({value: this.counterValue});
  }
}
