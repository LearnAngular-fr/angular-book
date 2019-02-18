import { Component, OnInit } from '@angular/core';
import {LoggerService} from './logger.service';

@Component({
  selector: 'app-component3',
  template: 'Learn Angular !'
})
export class Component3 implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.debug('In component3');
  }

}
