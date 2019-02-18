import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
     <h1>Mon second Component</h1>
  `,
  styles: [`
    h1 {
      color : blue;
    }
  `]
})
export class ChildComponent {
}
