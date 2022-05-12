import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/stats.service';
import * as types from 'src/app/types';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-initiative',
  templateUrl: './initiative.component.html',
  styleUrls: ['./initiative.component.css']
})
export class InitiativeComponent implements OnInit {

  constructor() { }
  stats = new StatsService();
  playerStats: types.EphemerialStats = {
    currentHP: 0,
    tempHP: 0,
    inspiration: 0,
    hitDiceD6: 0,
    hitDiceD8: 0,
    hitDiceD10: 0,
    hitDiceD12: 0,
    initiative: 0,
    deathSaves: {
      succsesses: 0,
      failures: 0,
    },
  };

  ngOnInit(): void {
    this.stats.getEphemerialStats().subscribe(playerStats => this.playerStats = playerStats);
  }

}
