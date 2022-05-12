import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.css']
})
export class StatsPageComponent implements OnInit {

  @Input() character?:StatsService;
  constructor() { }

  ngOnInit(): void {
  }

}
