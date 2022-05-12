import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from '../../stats.service';
import { STATS } from '../Mock-Stats';

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.css']
})
export class SpeedComponent implements OnInit {
  @Input() character?:StatsService;

  constructor() { }
  stats = STATS;
  ngOnInit(): void {
  }

}
