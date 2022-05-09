import { Component } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dndCharacterSheet';
  list: Item[] = [
    {
      listText:'This is an item',
      pointer:'This points to something',
      tags:[]
    },
    {
      listText:'This is a second item',
      pointer:'This points to something else',
      tags:[]
    }
  ];
}
