import {Injectable, NgModule, Component, ModuleWithProviders} from '@angular/core';


@Component({
  selector: 'app-shared',
  template: 'Hello world'
})
export class SharedComponent {

}

@Injectable()
export class LogService {
  constructor() {
    console.log('Created an instance of LogService...');
  }
}

@NgModule({
  declarations: [SharedComponent],
  exports: [SharedComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [LogService]
    };
  }
}

