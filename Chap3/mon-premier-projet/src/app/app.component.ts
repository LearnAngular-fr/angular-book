import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <h1>Mon premier Component</h1>
    <app-child></app-child>
    <app-cadre>un contenu dans mon cadre</app-cadre>
  `,
  styles: [`
    h1 {
      color: red;
    }
  `]
})
export class AppComponent {
}
