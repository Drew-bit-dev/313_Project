import { Component, OnInit } from '@angular/core';
import { STATS } from '../Mock-Stats';


@Component({
  selector: 'app-proficiency',
  templateUrl: './proficiency.component.html',
  styleUrls: ['./proficiency.component.css']
})
export class ProficiencyComponent implements OnInit {

  constructor() { }
  stats = STATS;
  ngOnInit(): void {
  }

}
