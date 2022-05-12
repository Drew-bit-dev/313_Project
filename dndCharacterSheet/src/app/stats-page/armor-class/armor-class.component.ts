import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from '../../stats.service';
import { STATS } from '../Mock-Stats';

@Component({
  selector: 'app-armor-class',
  templateUrl: './armor-class.component.html',
  styleUrls: ['./armor-class.component.css']
})
export class ArmorClassComponent implements OnInit {
  @Input() character?:StatsService;

  constructor() { }
  stats = STATS;
  ngOnInit(): void {
  }

}
