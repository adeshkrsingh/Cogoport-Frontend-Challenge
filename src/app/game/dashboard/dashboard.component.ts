import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { ApiconnectionService } from '../../service/apiconnection.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
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
export class DashboardComponent implements OnInit {
  datacopy= [];
  mySubscription: any;
  data = [];
  state: String;
  resultdata: any;

  constructor(private api: ApiconnectionService) { }

  ngOnInit() {
    this.state = 'state1';
    this.mydata();
  }

  /*
    * Fetching API DATA from GamesArena
    */
  public mydata() {
    this.mySubscription = this.api.getData('').subscribe(result => {
      this.resultdata = result;
      for (let index = 0; index < result.length; index++) {
        if (index > 0) {
          this.data.push(result[index]);
          this.datacopy.push(result[index]);
        }
      }
      // this.data = result;
      // console.log(result);
    });
  }

  submitform(myform) {
    this.data = [];
    let searchstr = myform.value.search;
    console.log(searchstr);
    if (searchstr === '') {
      this.data = this.datacopy;
    } else {
      for (let index = 0; index < this.resultdata.length; index++) {
        let str = this.resultdata[index].title;
        if (str !== undefined) {
          str = str.toLowerCase();
          searchstr = searchstr.toLowerCase();
          const x = str.search(searchstr);
          if (x >= 0) {
            // this.data[index] = result[index];
            this.data.push(this.resultdata[index]);
          }
        }
      }
    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    try {
      this.mySubscription.unsubscribe();
    } catch (error) { }
  }
}
