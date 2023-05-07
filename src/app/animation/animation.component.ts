import { Component } from '@angular/core';
import {animate,trigger,state,style,transition} from '@angular/animations'

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger("openClose",[
    state("open",style({
      height:'500px',
      backgroundColor:'blue'
    })),
    state("close",style({
      height:'200px',
      backgroundColor:'red'
    })),
    transition("open=>close",[animate('1s')]),
    transition("close=>open",[animate('1s')])
  ]
  )]
})
export class AnimationComponent {
  isopen=true

  trigger(){
    this.isopen=!this.isopen
  }
}
