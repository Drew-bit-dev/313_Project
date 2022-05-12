import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../Item';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @Output() confirmCharacter = new EventEmitter<StatsService>();

  constructor() { }

  characters: Item[] = [
    {
      listText:"Conan the Barbarian (but a rogue)",
      pointer:"He's really a rogue, not a barbarian, intimidates people for sneak attack",
      tags:["Rogue", "Definitely a rogue", "Not a barbarian"]
    },
    {
      listText:"Drizzt Do'Urden",
      pointer:"A famous drow, probably also a rogue",
      tags:["Rogue", "Drow"]
    },
    {
      listText:"Mordenkainen",
      pointer:"Not a wizard, just *really* good at slight of hand",
      tags:["Rogue", "Not a wizard"]
    }
  ]

  selectedCharacter?: Item|null;
  popupText:string = 'Enter %ERROR% to continue';

  newCharacter():void{ this.confirmCharacter.emit(new StatsService()); }

  selectCharacter(char: Item|null): void {
    this.selectedCharacter=char;
    if(this.selectedCharacter){
      this.popupText = 'Enter '+this.selectedCharacter.listText+' to continue';
    } else {
      this.popupText = 'Enter %ERROR% to continue';
    }
  }

  attempt(str:string){
    if(this.selectedCharacter){
      if(str==this.selectedCharacter.listText){
        //TODO poke database for character
        // this.confirmCharacter.emit(this.selectedCharacter.listText);
      } else {
        this.popupText = "Incorrect password \n"+this.popupText
      }
    } else {
      this.popupText = "how did you get a popup without selecting something?"
    }
  }

  clearSelection(): void { this.selectedCharacter=null;location.reload() }

  ngOnInit(): void {
  }

}
