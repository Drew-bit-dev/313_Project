import { Component, OnInit } from '@angular/core';
import { STATS } from '../Mock-Stats';

@Component({
  selector: 'app-hitpoints',
  templateUrl: './hitpoints.component.html',
  styleUrls: ['./hitpoints.component.css']
})
export class HitpointsComponent implements OnInit {

  constructor() { }
  stats = STATS;
  ngOnInit(): void {
  }

}
