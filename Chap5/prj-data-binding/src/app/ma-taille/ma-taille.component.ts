import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ma-taille',
  template: `
    <div>
      <button (click)="dec()" title="plus petit">-</button>
      <button (click)="inc()" title="plus grand">+</button>
      <label [style.font-size.px]="taille">FontSize: {{taille}}px</label>
    </div> `
})
export class MaTailleComponent {
  @Input() taille: number;
  @Output() tailleChange = new EventEmitter<number>();

  dec() {
    this.resize(-1);
  }

  inc() {
    this.resize(+1);
  }

  resize(delta: number) {
    this.taille = +this.taille + delta;
    this.tailleChange.emit(this.taille);
  }
}
