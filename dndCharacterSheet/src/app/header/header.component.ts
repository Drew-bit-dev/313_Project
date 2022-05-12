import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() tab = new EventEmitter<string>();
  @Input() char?:StatsService;

  constructor() { }

  ngOnInit(): void {
  }

  setTab(str:string){ this.tab.emit(str); }

  levelUp(){
    //TODO
    console.log("leveeeeele UP!!")
  }
}
