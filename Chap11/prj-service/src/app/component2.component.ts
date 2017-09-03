import { Component, OnInit } from '@angular/core';
import {LoggerService} from "./logger.service";

@Component({
  selector: 'app-component2',
  template: '<app-component3></app-component3>',
  providers: [LoggerService]
})
export class Component2 implements OnInit {

  constructor(private logger:LoggerService) { }

  ngOnInit() {
    this.logger.level=1; //On change le niveau de log en 'info'
    this.logger.info(this.logger.level.toString());
    //console.log('size : '+this.logger.logs.length);
  }

}
