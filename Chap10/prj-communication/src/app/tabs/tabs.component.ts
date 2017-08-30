import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import {TabComponent} from "../tab/tab.component";


@Component({
  selector: 'tabs',
  template:`
    <ul class="nav nav-tabs">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <a href="#">{{tab.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  // contentChildren sont maintenant settés
  ngAfterContentInit() {
    // recupère les tabs actifs
    let activeTabs = this.tabs.filter((tab)=>tab.active);

    // Activer le premier s'il n'en existe pas
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent){
    // desactive tous les tabs
    this.tabs.toArray().forEach(tab => tab.active = false);

    // Active le tab sur lequel l'utilisateur à cliqué
    tab.active = true;
  }

}
