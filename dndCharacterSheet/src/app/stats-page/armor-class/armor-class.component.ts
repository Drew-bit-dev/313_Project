import { Component, OnInit } from '@angular/core';
import { STATS } from '../Mock-Stats';

@Component({
  selector: 'app-armor-class',
  templateUrl: './armor-class.component.html',
  styleUrls: ['./armor-class.component.css']
})
export class ArmorClassComponent implements OnInit {

  constructor() { }
  stats = STATS;
  ngOnInit(): void {
  }

}
