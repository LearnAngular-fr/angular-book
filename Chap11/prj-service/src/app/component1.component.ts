import { Component, OnInit } from '@angular/core';
import {LoggerService} from "./logger.service";

@Component({
  selector: 'app-component1',
  template: '<app-component2></app-component2>',
  providers: [LoggerService]
})
export class Component1 implements OnInit {

  constructor(private logger:LoggerService) { }


  ngOnInit() {
    this.logger.debug('component1');
    //console.log('size : '+this.logger.logs.length);
    setTimeout(()=>{
      console.log('timeOut !');
      this.logger.debug('timeout');
    },2000);

  }

}
