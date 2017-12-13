import {Injectable, Optional} from '@angular/core';

export class MonServiceConfig {
  maValeur: string;
}

@Injectable()
export class MonService {

  maValeur: string ;

  constructor(@Optional() config: MonServiceConfig) {
    if (config) {
      this.maValeur = config.maValeur;
    } else {
      this.maValeur = 'Initiale';
    }
  }

}
