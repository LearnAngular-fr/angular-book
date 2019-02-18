import { Component, OnInit } from '@angular/core';
import { RandomService } from './random.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prj-test';

  tirage: number;
  tirageAsync: number;

  constructor(private randomService: RandomService) {
  }

  ngOnInit() {
    this.tirage = this.randomService.pull();
    this.randomService.pullAsync().then((value) => this.tirageAsync = value);
  }

}
