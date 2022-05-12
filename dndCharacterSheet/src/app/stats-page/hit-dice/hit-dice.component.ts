import { Component, OnInit } from '@angular/core';
import { StatsService } from 'src/app/stats.service';
import * as types from 'src/app/types';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-hit-dice',
  templateUrl: './hit-dice.component.html',
  styleUrls: ['./hit-dice.component.css']
})
export class HitDiceComponent implements OnInit {

  constructor() { }
  stats = new StatsService();
  maxDice: types.BaseStats = {
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
  currentDice: types.EphemerialStats = {
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
    this.stats.getBaseStats().subscribe(maxDice => this.maxDice = maxDice);
    this.stats.getEphemerialStats().subscribe(currentDice => this.currentDice = currentDice);
  }

  useD6() {
    if(this.currentDice.hitDiceD6 > 0){
      this.currentDice.hitDiceD6 -= 1;
    }
  }

  useD8() {
    if(this.currentDice.hitDiceD8 > 0){
      this.currentDice.hitDiceD8 -= 1;
    }
  }

  useD10() {
    if(this.currentDice.hitDiceD10 > 0){
      this.currentDice.hitDiceD10 -= 1;
    }
  }

  useD12() {
    if(this.currentDice.hitDiceD12 > 0){
      this.currentDice.hitDiceD12 -= 1;
    }
  }

  resetDice() {
    if(this.currentDice.hitDiceD6 + Math.round((this.maxDice.hitDiceD6 / 2) + 0.5) > this.maxDice.hitDiceD6){
      this.currentDice.hitDiceD6 = this.maxDice.hitDiceD6;
    }
    else{
      this.currentDice.hitDiceD6 += Math.round((this.maxDice.hitDiceD6 / 2) + 0.5)
    }
    if(this.currentDice.hitDiceD8 + Math.round((this.maxDice.hitDiceD8 / 2) + 0.5) > this.maxDice.hitDiceD8){
      this.currentDice.hitDiceD8 = this.maxDice.hitDiceD8;
    }
    else{
      this.currentDice.hitDiceD8 += Math.round((this.maxDice.hitDiceD8 / 2) + 0.5)
    }
    if(this.currentDice.hitDiceD10 + Math.round((this.maxDice.hitDiceD10 / 2) + 0.5) > this.maxDice.hitDiceD10){
      this.currentDice.hitDiceD10 = this.maxDice.hitDiceD10;
    }
    else{
      this.currentDice.hitDiceD10 += Math.round((this.maxDice.hitDiceD10 / 2) + 0.5)
    }
    if(this.currentDice.hitDiceD12 + Math.round((this.maxDice.hitDiceD12 / 2) + 0.5) > this.maxDice.hitDiceD12){
      this.currentDice.hitDiceD12 = this.maxDice.hitDiceD12;
    }
    else{
      this.currentDice.hitDiceD12 += Math.round((this.maxDice.hitDiceD12 / 2) + 0.5)
    }
  }

}
