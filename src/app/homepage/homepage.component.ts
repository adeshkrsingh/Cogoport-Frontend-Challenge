import { Component, OnInit,  } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { ApiconnectionService } from '../service/apiconnection.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [
    trigger('rightleftAnimate', [
      state('state1', style({
      })),
      state('state2', style({
      })),
      transition('state1 <=> state2', animate('300ms ease-in', keyframes([
        style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
        style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.25 }),
        style({ opacity: 1, transform: 'translateX(-25px)', offset: 0.5 }),
        style({ opacity: 1, transform: 'translateX(15px)', offset: 0.75 }),
        style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
      ])
      )),
    ])
  ],
})
export class HomepageComponent implements OnInit {
  mySubscription: any;
  data = [];
  state: String;
  animateLoc = [];
  showLoader: boolean;

  constructor(private api: ApiconnectionService) { }

  ngOnInit() {
    this.state = 'state1';
    this.mydata();
    this.showLoader = true;
  }
  animateMe(index) {
    this.animateLoc.push('state1');
    return this.animateLoc[index];
  }
  animateMe2(i) {
    this.animateLoc[i] = (this.animateLoc[i] === 'state1' ? 'state2' : 'state1' );
    // this.state = (this.state === 'state1' ? 'state2' : 'state1');
    console.log(this.animateLoc[i]);
  }

  /*
  * Fetching API DATA from GamesArena
  */
  public mydata() {
    setTimeout(() => {
      this.mySubscription = this.api.getData('').subscribe(result => {
      for (let index = 0; index < result.length; index++) {
        if (index > 0 && index <= 20) {
          // this.data[index] = result[index];
          this.data.push(result[index]);
          // console.log(result[index]);
        }
      }
      // this.data = result;
      // console.log(result);
    });
    this.showLoader = false;
    }, 3000);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    try {
      this.mySubscription.unsubscribe();
    } catch (error) { }
  }
}
