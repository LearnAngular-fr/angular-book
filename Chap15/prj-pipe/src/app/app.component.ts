import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { InjectablePipe } from './injectable.pipe';


@Component({
  selector: 'app-root',
  template: `
      <h1>Valeur primitive: {{ name | pure }}</h1>
      <h1>Objet avec pipe pure: {{ person | pureObject }}</h1>
      <h1>Objet avec pipe impure: {{ person | impureObject }}</h1>
      <h1>Utilisation d'un pipe en tant que fonction: {{ myDateformatted }}</h1>
      <h1>Utilisation d'un pipe en tant que service: {{ message }}</h1>
      <h1>Exemple de pipe: {{ montant | forexEchange: 'USD' | currency: 'USD'}}</h1>
  `,
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  name: string;
  person = {name: 'Foo'};
  myDateformatted: string;
  message: string;
  montant: number;

  constructor(pipe: InjectablePipe) {
    this.message = pipe.transform('learn angular');
  }

  ngOnInit(): void {
    this.name = 'Foo';

    const myDate = new Date(2017, 2, 25);
    this.myDateformatted = formatDate(myDate, 'dd-MM-yyyy', 'fr-FR');

    this.montant = 12; // 12€

    setTimeout(() => {
      this.name = 'Bar';
      this.person.name = 'Bar';
    }, 1000);
  }
}
