import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../Item';

@Component({
  selector: 'app-player-creation',
  templateUrl: './player-creation.component.html',
  styleUrls: ['./player-creation.component.css']
})
export class PlayerCreationComponent implements OnInit {
  selectedTab: string = "Class";
  @Output() create = new EventEmitter<string>();

  
  
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

  constructor() { }

  ngOnInit(): void {
  }
  selectClass(i: Item|null){ this.selectedClass=i; }
  selectBackground(i: Item|null){ this.selectedBackground=i; }
  selectRace(i: Item|null){ this.selectedRace=i; }
  selectTab(tab: string){
    this.selectedTab=tab;
  }
  makeChar(){
    //TODO update DB
    this.create.emit(this.name);
  }

}
