import {Injectable, Optional} from '@angular/core';


export class MonAutreServiceConfig {
  monAutreValeur : string;
}

@Injectable()
export class MonAutreService {

  monAutreValeur : string ;

  constructor(@Optional() config: MonAutreServiceConfig) {
    if (config) {
      this.monAutreValeur = config.monAutreValeur;
    }
    else {
      this.monAutreValeur = 'Initiale'
    }
  }

}
