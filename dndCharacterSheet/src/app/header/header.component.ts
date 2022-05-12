import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() tab = new EventEmitter<string>();

  char:StatsService = new StatsService();

  constructor() { }

  ngOnInit(): void {
  }

  setTab(str:string){ this.tab.emit(str); }

}
