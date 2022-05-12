import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirbaseService } from '../firbase.service';
import { Item } from '../Item';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @Output() confirmCharacter = new EventEmitter<StatsService>();

  constructor(private charService: FirbaseService) { }

  fetchData(){
    this.charService.getCharacters().subscribe(data => {
      this.characters = data;
      console.log(data)
      this.generateDisplay();
    })
  }


  characters: StatsService[] = [];

  charactersDisplay: Item[] = [
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

  selectedCharacter?: StatsService|null;
  popupText:string = 'Enter %ERROR% to continue';

  generateDisplay(){
    this.charactersDisplay=[];
    for(let i = 0; i < this.characters.length; i++){
      this.charactersDisplay.push({listText:this.characters[i].character.permanantStats.characterName, pointer:"", tags:[]})
    }
  }
  newCharacter():void{ this.confirmCharacter.emit(new StatsService()); }

  selectCharacter(char: Item|null): void {
    this.selectedCharacter=null;
    for(let i = 0; i < this.characters.length; i++){
      if(char && this.characters[i].character.permanantStats.characterName==char.listText)
        this.selectedCharacter=this.characters[i]
    }
    
    if(this.selectedCharacter){
      this.popupText = 'Enter your name to continue';
    } else {
      this.popupText = 'Enter %ERROR% to continue';
    }
  }

  attempt(str:string){
    if(this.selectedCharacter){
      if(str==this.selectedCharacter.character.permanantStats.playerName){
        this.confirmCharacter.emit(this.selectedCharacter);
      } else {
        this.popupText = "Incorrect password \n"+this.popupText
      }
    } else {
      this.popupText = "how did you get a popup without selecting something?"
    }
  }

  clearSelection(): void { this.selectedCharacter=null;location.reload() }

  ngOnInit(): void {
    this.fetchData();
  }

}
