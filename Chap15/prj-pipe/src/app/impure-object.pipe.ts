import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureObject',
  pure: false
})
export class ImpureObjectPipe implements PipeTransform {

  private cachedValue: any = null; // Objet précédent
  private latestValue: string = null; // Dernière valeur retournée afin de ne pas refaire tout le traitement à chaque fois

  transform(value: any): any {

    if (value !== this.cachedValue) {
      this.cachedValue = value;
      this.latestValue = null;
    }

    this.latestValue = 'Bonjour ' + value.name + ' !';
    return this.latestValue;

  }


}
