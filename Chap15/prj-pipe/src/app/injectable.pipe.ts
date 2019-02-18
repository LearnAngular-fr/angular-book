import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'injectable'
})
export class InjectablePipe implements PipeTransform {

  transform(value: string) {
    return 'Bonjour ' + value + ' !';
  }

}
