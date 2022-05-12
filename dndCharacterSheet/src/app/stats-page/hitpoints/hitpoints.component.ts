import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from '../../stats.service';
import { STATS } from '../Mock-Stats';

@Component({
  selector: 'app-hitpoints',
  templateUrl: './hitpoints.component.html',
  styleUrls: ['./hitpoints.component.css']
})
export class HitpointsComponent implements OnInit {
  @Input() character?:StatsService;

  constructor() { }
  stats = STATS;
  ngOnInit(): void {
  }

}
