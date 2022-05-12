import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from '../../stats.service';
import * as types from '../../types';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-stats-bubble',
  templateUrl: './stats-bubble.component.html',
  styleUrls: ['./stats-bubble.component.css']
})
export class StatsBubbleComponent implements OnInit {
  @Input() character?:StatsService;

  constructor(public statsService: StatsService) { }
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
    this.stats.getBaseStats().subscribe(playerStats => this.playerStats = this.statsService.character.baseStats);
  }

  calculateModifier(number: number): number{
    return Math.floor((number-10)/2);
  }

}
