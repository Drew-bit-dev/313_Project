import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from '../../stats.service';
import { STATS } from '../Mock-Stats';

@Component({
  selector: 'app-initiative',
  templateUrl: './initiative.component.html',
  styleUrls: ['./initiative.component.css']
})
export class InitiativeComponent implements OnInit {
  @Input() character?:StatsService;

  constructor() { }
  stats = STATS;
  ngOnInit(): void {
  }

}
