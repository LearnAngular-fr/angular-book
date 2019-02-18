import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  pull(): number {
    return Math.ceil(Math.random() * 100);
  }

  pullAsync(): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(Math.ceil(Math.random() * 100)), 3000);
    });
  }

}
