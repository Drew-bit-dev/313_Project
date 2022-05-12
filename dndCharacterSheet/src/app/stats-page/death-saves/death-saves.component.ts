import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from '../../stats.service';

@Component({
  selector: 'app-death-saves',
  templateUrl: './death-saves.component.html',
  styleUrls: ['./death-saves.component.css']
})
export class DeathSavesComponent implements OnInit {
  @Input() character?:StatsService;

  constructor() { }

  ngOnInit(): void {
  }

  sCount: number = 0;
  fCount: number = 0;
  dead: string = "u r dead. not big soup rise";

  reset(): void {
    this.sCount = 0;
    this.fCount = 0;
  }

  addsCount(): void {
    if(this.sCount < 3){
      this.sCount += 1;
    }
  }

  addfCount(): void {
    if(this.fCount < 3){
      this.fCount += 1;
    }
  }

}
