import { Component, Input, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-bio-page',
  templateUrl: './bio-page.component.html',
  styleUrls: ['./bio-page.component.css']
})
export class BioPageComponent implements OnInit {
  @Input() character?:StatsService;

  constructor() { }

  ngOnInit(): void {
  }

}
