import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../Item';
@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.css']
})
export class ListboxComponent implements OnInit {
  selectedItem?: Item | null;
  @Input() itemList?: Item[];

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(item: Item|null){
    this.selectedItem=item;
  }
}
