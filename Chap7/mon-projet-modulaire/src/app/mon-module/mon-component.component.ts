import {Component, OnInit} from '@angular/core';
import {MonService} from "./mon-service.service";
import {MonAutreService} from "./mon-autre-service.service";

@Component({
  selector: 'app-mon-module',
  template: `
    <h2>{{valeur}}</h2>
    <h2>{{monAutreValeur}}</h2>
  `
})
export class MonComponent implements OnInit {

  public valeur: string;
  public monAutreValeur: string;

  constructor(private monService: MonService, private monAutreService: MonAutreService) { }

  ngOnInit() {
    this.valeur = this.monService.maValeur;
    this.monAutreValeur = this.monAutreService.monAutreValeur;
  }

}
