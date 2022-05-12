import { Component } from '@angular/core';
import {StatsService} from './stats.service';
import * as types from './types'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dndCharacterSheet';
  ngOnInit(){
	  this.statsService.test();
  }
  constructor(private statsService: StatsService){}
}
