import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from '../../stats.service';
import * as types from '../../types';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-initiative',
  templateUrl: './initiative.component.html',
  styleUrls: ['./initiative.component.css']
})
export class InitiativeComponent implements OnInit {
  @Input() character?:StatsService;

  constructor(public statsService: StatsService) { }
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
    this.stats.getEphemerialStats().subscribe(playerStats => this.playerStats = this.statsService.character.ephemerialStats);
  }

}
