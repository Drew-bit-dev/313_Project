import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from '../../stats.service';
import * as types from '../../types';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-death-saves',
  templateUrl: './death-saves.component.html',
  styleUrls: ['./death-saves.component.css']
})
export class DeathSavesComponent implements OnInit {
  @Input() character?:StatsService;

  constructor(public statsService: StatsService) { }
  stats = new StatsService();
  deathSaves: types.DeathSaves = {succsesses: 0, failures: 0};

  ngOnInit(): void {
    this.stats.getDeathSaves().subscribe(deathSaves => this.deathSaves = this.statsService.character.ephemerialStats.deathSaves);
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
    this.checkDeathSaves();
  }
  checkDeathSaves(){
      if (this.stats.character.ephemerialStats.deathSaves.succsesses>3){
        //trigger a function to show a message
        this.stats.resetDeathSaves();
      }
      else if (this.stats.character.ephemerialStats.deathSaves.failures>3){
        //trigger failure state
       this.stats.resetDeathSaves();
    }
  }

  addSuccsess(){
    this.stats.incrementDeathSuccsesses();
    this.checkDeathSaves();
    this.deathSaves.succsesses=this.stats.character.ephemerialStats.deathSaves.succsesses
  }

  addFailure(){
    this.stats.incrementDeathFailures();
    this.checkDeathSaves();
    this.deathSaves.failures=this.stats.character.ephemerialStats.deathSaves.failures
  }
}
