import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from './currency.service';

@Pipe({
  name: 'forexEchange',
  pure: false
})
export class ForexEchangePipe implements PipeTransform {

  private cachedValue: number;

  private result: number;

  constructor(private currencyService: CurrencyService, private cd: ChangeDetectorRef) {
  }


  transform(value: number, exchange) {

    if (value !== this.cachedValue) {

      this.cachedValue = value;
      this.result = null;

      this.currencyService.getChange(value, 'EUR', exchange)
        .subscribe(res => {
            this.result = res;
            this.cd.markForCheck();
          }
        );
    }
    return this.result;

  }

}
