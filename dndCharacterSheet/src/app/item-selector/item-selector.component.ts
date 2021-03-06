import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as types from '../types';

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.css']
})
export class ItemSelectorComponent implements OnInit {

  @Output() submit = new EventEmitter<string[]>();
  @Input() amount?:number;
  @Input() options?:string[];
  @Input() default?:string[];
  currentOptions?:string;

  @Input() selection?:string[];
  indices?:number[];
  selectedIndex=-1

  constructor() { }

  ngOnInit(): void {
    this.selection = [];
    this.indices = [];
    for(let i = 0; this.amount && i < this.amount; i++){
      if(this.default && this.default.length>i){
        this.selection.push(this.default[i]);
      } else {
        this.selection.push("Click to Select");
      }
      this.indices.push(i);
    }
    this.updateOptions();
  }

  updateOptions(){
    this.currentOptions="Enter one from: ";
    for(let i = 0; this.options && i < this.options.length; i++){
      if(this.selection && this.options && !this.selection.includes(this.options[i])){
        this.currentOptions+=this.options[i]+", ";
      }
    }
    this.currentOptions=this.currentOptions.substring(0,this.currentOptions.length-2);
  }

  select(index:number){
    this.selectedIndex=index;
    this.updateOptions();
  }

  onChange(str:string): void {
    if((this.options && !this.options.includes(str)) || (this.selection && this.selection.includes(str))){
      this.currentOptions+="\nYou selected an invalid option, this may be because you already selected it, because of a typo, or because it isn't an available option."
    } else if(this.selection) {
      this.selection[this.selectedIndex]=str
      this.selectedIndex=-1;
      let out = [];
      for(let i = 0; i < this.selection.length; i++){
        if(this.selection[i]!='Click to Select')out.push(this.selection[i])
      }
      this.submit.emit(out)
      this.updateOptions()
    }
  }

}
