import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../Item';
import { StatsService } from '../stats.service';
import { FirbaseService } from '../firbase.service';
import * as types from '../types';
import * as features from '../features';

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
  proficiencies:types.skillsEnum[]=[]

  checkReady(){
    if(this.selectedClass && this.selectedRace && this.selectedBackground && this.proficiencies.length>3){
      this.readyToMake = true;
    }
    if(!this.align || this.align=="Click to Select"){
      this.readyToMake = false;
    } else {
      console.log(this.align)
    }
  }

  constructor(private firbase: FirbaseService) { }

  ngOnInit(): void {
  }
  selectClass(i: Item|null){ this.selectedClass=i;this.checkReady(); }
  selectBackground(i: Item|null){ this.selectedBackground=i;this.checkReady(); }
  selectRace(i: Item|null){ this.selectedRace=i;this.checkReady(); }
  selectTab(tab: string){
    this.selectedTab=tab;
  }

  updateProfs(profs:string[]){
    this.proficiencies = profs as types.skillsEnum[];
    this.checkReady();
  }
  makeChar(){
    //TODO update DB
    let char = new StatsService();
    if(this.name)char.character.permanantStats.characterName=this.name;
    if(this.playerName)char.character.permanantStats.playerName=this.playerName;
    if(this.align)char.character.permanantStats.alignmentGoodEvil=this.align.indexOf("Good")>-1?'Good':this.align.indexOf("Evil")>-1?'Evil':'Neutral';
    if(this.align)char.character.permanantStats.alignmentLawfulChaoitc=this.align.indexOf("Chaotic")>-1?'Chaotic':this.align.indexOf("Lawful")>-1?'Lawful':'Neutral';
    char.levelUp([new features.initalHitDice(), new features.initalHP(), new features.sneakAttack(1), new features.initalProficiencies(this.proficiencies)]);
    this.create.emit(char);
    this.firbase.addCharacter(char)
    .subscribe(data => {
      console.log(data);
    })
    console.log(char)
  }

}
