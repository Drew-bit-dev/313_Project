import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from '../../stats.service';
import { STATS } from '../Mock-Stats';

@Component({
  selector: 'app-stats-bubble',
  templateUrl: './stats-bubble.component.html',
  styleUrls: ['./stats-bubble.component.css']
})
export class StatsBubbleComponent implements OnInit {
  @Input() character?:StatsService;

  constructor() { }
  stats = STATS;
  ngOnInit(): void {
  }

}
