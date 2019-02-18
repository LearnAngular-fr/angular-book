import {Component} from '@angular/core';
import {LoggerService} from './logger.service';

@Component({
  selector: 'app-root',
  template: `Bonjour learn-angular.fr !
             <app-component1></app-component1>`
})
export class AppComponent {

  constructor(private logger: LoggerService) {
    this.logger.debug('Dans le constructeur ...');
  }

}
