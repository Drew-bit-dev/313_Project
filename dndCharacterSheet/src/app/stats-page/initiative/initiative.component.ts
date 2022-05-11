import { Component, OnInit } from '@angular/core';
import { STATS } from '../Mock-Stats';

@Component({
  selector: 'app-initiative',
  templateUrl: './initiative.component.html',
  styleUrls: ['./initiative.component.css']
})
export class InitiativeComponent implements OnInit {

  constructor() { }
  stats = STATS;
  ngOnInit(): void {
  }

}
