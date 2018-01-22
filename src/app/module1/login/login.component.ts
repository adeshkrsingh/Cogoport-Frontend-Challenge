import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(35px)', offset: 0.5 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
      ])
      )),
    ]),
    trigger('rightleftAnimate', [
      state('state1', style({
      })),
      state('state2', style({
      })),
      transition('state1 <=> state2', animate('300ms ease-in', keyframes([
        style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
        style({ opacity: 1, transform: 'translateX(-25px)', offset: 0.25 }),
        style({ opacity: 1, transform: 'translateX(-45px)', offset: 0.5 }),
        style({ opacity: 1, transform: 'translateX(35px)', offset: 0.75 }),
        style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
      ])
      )),
    ])
  ],
})

export class LoginComponent implements OnInit {
  state: String;
  state2: String;
  showLoader: boolean;

  constructor() {
   }

  ngOnInit() {
    this.state = 'small';
    this.state2 = 'state1';
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
    }, 2500);
  }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
  animateMe2() {
    this.state2 = (this.state2 === 'state1' ? 'state2' : 'state1');
  }


  onSubmit(content: any) {

  }

  submitform(myform) {
    console.log(myform.value);
    this.onSubmit( myform.value );
  }
}
