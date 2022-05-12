import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/stats.service';
import * as types from 'src/app/types';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-proficiency',
  templateUrl: './proficiency.component.html',
  styleUrls: ['./proficiency.component.css']
})
export class ProficiencyComponent implements OnInit {

  constructor() { }
  stats = new StatsService();
  playerStats: types.BaseStats = {
    proficiencyBonus: 2,
    maxHPBeforeCon: 0,
    speed: 0,
    hitDiceD6: 0,
    hitDiceD8: 0,
    hitDiceD10: 0,
    hitDiceD12: 0,
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  };

  ngOnInit(): void {
    this.stats.getBaseStats().subscribe(playerStats => this.playerStats = playerStats);
  }

}
