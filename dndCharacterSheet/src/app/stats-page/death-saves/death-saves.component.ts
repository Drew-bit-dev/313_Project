import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/stats.service';
import * as types from 'src/app/types';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-death-saves',
  templateUrl: './death-saves.component.html',
  styleUrls: ['./death-saves.component.css']
})
export class DeathSavesComponent implements OnInit {

  constructor() { }
  stats = new StatsService();

  ngOnInit(): void {
  }

  rollDeathSave(){
		let x = Math.random();
    if (x > 0.95) {
			this.stats.character.ephemerialStats.deathSaves.succsesses = 3;
      this.stats.setCurrentHP(this.stats.character.ephemerialStats.currentHP + 1);
		}
    else if (x > 0.45){
      this.stats.incrementDeathSuccsesses();
    }
    else if (x > 0.05){
			this.stats.incrementDeathFailures();
		}
    else{
      this.stats.character.ephemerialStats.deathSaves.failures = 3;
    }
		if (this.stats.character.ephemerialStats.deathSaves.succsesses===3){
			//trigger a function to show a message
			this.stats.resetDeathSaves();
		}
    else{
			//trigger failure state
		}

}
}
