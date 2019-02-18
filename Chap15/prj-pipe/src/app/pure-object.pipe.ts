import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureObject'
})
export class PureObjectPipe implements PipeTransform {

  transform(value: any): any {
    return 'Bonjour ' + value.name + ' !';
  }

}
