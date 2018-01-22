import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css'],
  animations: [
    trigger('rotateAnimate', [
      state('state1', style({
      })),
      state('state2', style({
      })),
      transition('state1 <=> state2', animate('300ms ease-in', keyframes([
        style({ opacity: 1, transform: 'rotate(0deg)', offset: 0 }),
        style({ opacity: 1, transform: 'rotate(90deg)', offset: 0.25 }),
        style({ opacity: 1, transform: 'rotate(180deg)', offset: 0.5 }),
        style({ opacity: 1, transform: 'rotate(270deg)', offset: 0.75 }),
        style({ opacity: 1, transform: 'rotate(360deg)', offset: 1.0 })
      ])
      )),
    ])
  ],
})
export class PagenotfoundComponent implements OnInit {
  state: String;

  constructor() { }

  ngOnInit() {
    this.state = 'state1';
  }
  animate() {
    this.state = (this.state === 'state1' ? 'state2' : 'state1');
  }

}
