import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../Item';
@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.css']
})
export class ListboxComponent implements OnInit {
  @Output() onSelect = new EventEmitter<Item|null>();
  @Input() selectedItem?: Item | null;
  @Input() itemList?: Item[];

  constructor() { }

  ngOnInit(): void {
  }

  select(item: Item|null){
    this.selectedItem=item;
    this.onSelect.emit(item);
  }
}
