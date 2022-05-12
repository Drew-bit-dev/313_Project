import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from '../../stats.service';
import * as types from '../../types';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-hitpoints',
  templateUrl: './hitpoints.component.html',
  styleUrls: ['./hitpoints.component.css']
})
export class HitpointsComponent implements OnInit {
  @Input() character?:StatsService;

  constructor(public statsService: StatsService) { }
  stats = new StatsService();
  playerEPStats: types.EphemerialStats = {
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
  playerBaseStats: types.BaseStats = {
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
    this.stats.getEphemerialStats().subscribe(playerEPStats => this.playerEPStats = this.statsService.character.ephemerialStats);
    this.stats.getBaseStats().subscribe(playerBaseStats => this.playerBaseStats = this.statsService.character.baseStats);
  }

}
