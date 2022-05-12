import { Component } from '@angular/core';
import {StatsService} from './stats.service';
import * as types from './types'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCharacter?: string; //TODO should this really be a string? idk how we poking DB or storing characters or what primary keys are or whatever
  title = 'dndCharacterSheet';
  selectCharacter(char:string):void{ this.selectedCharacter=char }
  ngOnInit(){
	  this.statsService.test();
  }
  constructor(private statsService: StatsService){}
}
