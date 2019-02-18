import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure'
})
export class PurePipe implements PipeTransform {

  transform(value: string) {
    return 'Bonjour ' + value + ' !';
  }

}
