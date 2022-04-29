import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jump-box',
  templateUrl: './jump-box.component.html',
  styleUrls: ['./jump-box.component.css']
})
export class JumpBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getJump(){
    //service path
    //intended to be data binded to the box
    //as this will be just taking the value from the servoce
  }

}
