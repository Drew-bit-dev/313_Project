import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {

  @Input() character?:StatsService;

  tab:string = 'Stats';

  constructor() { }

  ngOnInit(): void {
  }

  setTab(tab:string){ this.tab=tab; }

}
