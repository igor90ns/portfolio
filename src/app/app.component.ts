import { Component } from '@angular/core';
import {trigger, state, transition, style, animate} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('1s ease-out')
      ])]),
      
      trigger('flyRight',[
        state('in', style({transform: 'translatex(0)'})),
        transition('void => *', [
          style({transform: 'translateX(100%)'}),
          animate('1s ease-out')
      ])
    ]
      )
    ]
    

  
   

  })
export class AppComponent {
  title = 'app';
}
