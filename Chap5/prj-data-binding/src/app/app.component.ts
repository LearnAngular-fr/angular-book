import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <div [align]="alignement" [ngStyle]="{color:couleur}">
      Personne : {{person}} | Age : {{age}} |
      Adresse : {{address.street}}</div>
    <app-comp1 [monAdresse]="address"></app-comp1>
    <button (click)="modifierPersonne()">Modifier adresse</button>
    <h1>Event binding - Compteur</h1>
    <div>
      <app-comp2 (counterChange)="myValueChange($event);">
      </app-comp2>
    </div>
    <br/>
    <div>Valeur récupérée : {{compteur}}</div> 
    <br/>
    <app-ma-taille [(taille)]="maTaille"></app-ma-taille>
    <div [style.font-size.px]="maTaille">texte resizer</div>
    <br/>
    <h1>Data Binding 2-way</h1> <div>
    <input [(ngModel)]="person"/> </div>`
})
export class AppComponent {
  person: string= 'John Doe';
  age: number= 30;
  address: any= {street: 'rue du Paradis', city: '75010 Paris'};
  alignement: string = 'right';
  couleur: string = 'red';
  compteur: any = 'N/A';
  maTaille = 13;
  myValueChange (event) {
    this.compteur = event.value;
  }
  modifierPersonne () {
    this.person = 'Another man'; }
}
