import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from '../../stats.service';
import * as types from '../../types';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-armor-class',
  templateUrl: './armor-class.component.html',
  styleUrls: ['./armor-class.component.css']
})
export class ArmorClassComponent implements OnInit {
  @Input() character?:StatsService;
  AC?:number;
  ngOnInit(): void {
    if(this.character)this.AC=10+Math.floor((this.character.character.baseStats.dexterity-10)/2)
  }

}
