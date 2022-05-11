import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {

  @Input() character?:string;

  tab:string = 'Stats';

  constructor() { }

  ngOnInit(): void {
  }

  setTab(tab:string){ this.tab=tab; }

}
