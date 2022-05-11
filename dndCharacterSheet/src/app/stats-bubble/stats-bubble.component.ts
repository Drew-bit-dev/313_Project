import { Component, OnInit } from '@angular/core';
import { STATS } from '../Mock-Stats';
import { STATSMOD } from '../Mock-Stats';

@Component({
  selector: 'app-stats-bubble',
  templateUrl: './stats-bubble.component.html',
  styleUrls: ['./stats-bubble.component.css']
})
export class StatsBubbleComponent implements OnInit {

  constructor() { }
  stats = STATS;
  statsmod = STATSMOD;
  ngOnInit(): void {
  }

}
