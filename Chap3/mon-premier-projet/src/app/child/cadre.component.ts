import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cadre',
  template: `
      <div class="bordure">
        <h1>
          <ng-content></ng-content> </h1>
      </div> `,
  styles: [`
    h1 {
      color : darkmagenta;
    }
    .bordure {
      border: 1px solid darkmagenta;
} `]
})
export class CadreComponent {
}
