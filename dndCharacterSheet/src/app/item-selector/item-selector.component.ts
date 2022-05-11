import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.css']
})
export class ItemSelectorComponent implements OnInit {

  @Output() submit = new EventEmitter<string[]>();
  @Input() amount?:number;
  @Input() options?:string[];
  currentOptions?:string;

  selection?:string[];
  indices?:number[];
  selectedIndex=-1

  constructor() { }

  ngOnInit(): void {
    this.selection = [];
    this.indices = [];
    for(let i = 0; this.amount && i < this.amount; i++){
      this.selection.push("Click to Select");
      this.indices.push(i);
    }
    this.updateOptions();
  }

  updateOptions(){
    this.currentOptions="Enter one from: ";
    for(let i = 0; this.options && i < this.options.length; i++){
      if(this.selection && this.options && this.options[i] !in this.selection){
        this.currentOptions+=this.options[i]+", ";
      }
    }
    this.currentOptions=this.currentOptions.substring(this.currentOptions.length-2);
  }

  select(index:number){
    this.selectedIndex=index;
  }

  onChange(str:string): void {
    if((this.options && str !in this.options) || (this.selection && str in this.selection)){
      this.currentOptions+="\nYou selected an invalid option, this may be because you already selected it in a different selector, because of a typo, or because it isn't an available option."
    } else if(this.selection) {
      this.selection[this.selectedIndex]=str
      this.selectedIndex=-1;
      this.submit.emit(this.selection)
      this.updateOptions()
    }
  }

}
