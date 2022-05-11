import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Output() send = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<boolean>();
  @Input() display?: string; //HTML? Can we do that?
  textbox?: string;

  constructor() { }

  ngOnInit(): void {
  }

  clickOff(): void { this.cancel.emit(true); }

  enter(): void { this.send.emit(this.textbox); }

}
