import { Component, OnInit } from '@angular/core';
import { STATS } from '../Mock-Stats';

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.css']
})
export class SpeedComponent implements OnInit {

  constructor() { }
  stats = STATS;
  ngOnInit(): void {
  }

}
