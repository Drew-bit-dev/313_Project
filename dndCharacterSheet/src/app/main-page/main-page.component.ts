import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

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

  selectCharacter(char: Item|null): void {

  }

  clearSelection(): void {

  }

  ngOnInit(): void {
  }

}
