import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() tab = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  setTab(str:string){ this.tab.emit(str); }

}
