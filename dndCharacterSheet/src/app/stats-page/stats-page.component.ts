import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from '../stats.service';
import { Proficiency } from '../types';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.css']
})
export class StatsPageComponent implements OnInit {

  @Input() character?:StatsService;
  constructor() { }

  profs?:string;

  ngOnInit(): void {
    if(this.character){
      this.profs=""
      for(const prof in this.character.character.proficiencies){
        if(this.character.character.proficiencies[prof as keyof Proficiency])this.profs += prof+", ";
      }
      this.profs=this.profs.substring(0,this.profs.length-2)
    }
  }

}
