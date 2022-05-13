import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as types from '../types';
import * as features from '../features';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() tab = new EventEmitter<string>();
  @Input() char?:StatsService;

  constructor() { }

  ngOnInit(): void {
  }

  setTab(str:string){ this.tab.emit(str); }

  lvl(){
    if(this.char)console.log("leveling up "+this.char.character.permanantStats.characterName)
    if(this.char)this.char.levelUp([new features.gainHP(this.char.character.permanantStats.level+1, 5), new features.hitDice(this.char.character.permanantStats.level+1)]);
    if(this.char)console.log("leveled to "+this.char.character.permanantStats.level+"!")
  }
}
