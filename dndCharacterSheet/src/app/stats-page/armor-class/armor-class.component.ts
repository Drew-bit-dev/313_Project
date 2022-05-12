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

  stats = new StatsService();

  ngOnInit(): void {
  }

}
