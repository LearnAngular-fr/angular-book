import {Component, Input} from '@angular/core';
@Component({
  selector: 'app-comp1',
  template: ` {{monAdresse.street}} `
})
export class Comp1Component {
  @Input() monAdresse;
}
