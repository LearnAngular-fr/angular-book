import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';


export interface Latest {
  base: string;
  date: string;
  rates: [{[key: string]: number}];
}


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {


  constructor(private http: HttpClient) {
  }

  getChange(amount: number, base: string, exchange: string) {

    const params = new HttpParams();
    params.set('base', base);

    return this.http.get<Latest>('http://api.exchangeratesapi.io/latest', {params}).pipe(
      map(res => {
        return res.rates;
      }),
     map(rates => {
      const price = rates[exchange];
      if (price) {
        return price * amount;
      }
    }),
    catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Une erreur est survenue:', error.error.message);
    } else {
      console.error(
        `Backend retourne le code ${error.status}, ` +
        `body était: ${error.error}`);
    }
    return throwError('Une erreur est survenue; Réessayer plus tard.');
  }


}
