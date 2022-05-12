import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../Item';
import { StatsService } from '../stats.service';
import * as types from '../types';

@Component({
  selector: 'app-player-creation',
  templateUrl: './player-creation.component.html',
  styleUrls: ['./player-creation.component.css']
})
export class PlayerCreationComponent implements OnInit {
  selectedTab: string = "Class";
  @Output() create = new EventEmitter<StatsService>();
  align?:string;

  setAlign(str:string){this.align=str;this.checkReady();}

  
  
  //TODO poke database for following lists
  Classes: Item[] = [
    {
      listText:"Rogue",
      pointer:"Look at rogue!",
      tags:[]
    }
  ]
  Races: Item[] = [
    {
      listText:"Halfling",
      pointer:"Look at the short guy!",
      tags:[]
    }
  ]
  Backgrounds: Item[] = [
    {
      listText:"Criminal",
      pointer:"I'm chaotic neutral guys, I swear!",
      tags:[]
    }
  ]



  selectedClass?: Item|null;
  selectedRace?: Item|null;
  selectedBackground?: Item|null;
  @Input() name?: string;
  @Input() playerName?: string;
  readyToMake:boolean=false;

  checkReady(){
    if(this.selectedClass && this.selectedRace && this.selectedBackground){
      this.readyToMake = true;
    }
    if(!this.align || this.align=="Click to Select"){
      this.readyToMake = false;
    } else {
      console.log(this.align)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
  selectClass(i: Item|null){ this.selectedClass=i;this.checkReady(); }
  selectBackground(i: Item|null){ this.selectedBackground=i;this.checkReady(); }
  selectRace(i: Item|null){ this.selectedRace=i;this.checkReady(); }
  selectTab(tab: string){
    this.selectedTab=tab;
  }
  makeChar(){
    //TODO update DB
    let char = new StatsService();
    if(this.name)char.character.permanantStats.characterName=this.name;
    if(this.playerName)char.character.permanantStats.playerName=this.playerName;
    // char.character.permanantStats.alignmentGoodEvil=this.align.indexOf("Good")>-1?types.GoodEvil.Good:this.align.indexOf("Evil")>-1?types.GoodEvil.Evil:types.GoodEvil.Neutral;
    // char.character.permanantStats.alignmentGoodEvil=this.align.indexOf("Chaotic")>-1?types.LawfulChaotic.Chaotic:this.align.indexOf("Lawful")>-1?types.LawfulChaotic.Lawful:types.LawfulChaotic.Neutral;
    this.create.emit(char);
  }

}
