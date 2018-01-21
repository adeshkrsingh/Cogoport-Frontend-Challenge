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
  searchData= [];
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

  mySearch(search1, propert) {
    let searchstr = search1;
    let str = '';
    this.searchData = [];
    for (let index = 0; index < this.resultdata.length; index++) {
      if (propert === 'editors_choice') {
        str = this.resultdata[index].editors_choice;
      } else if (propert === 'genre') {
        str = this.resultdata[index].genre;
      } else if (propert === 'score') {
        str = this.resultdata[index].score;
      } else if (propert === 'platform') {
        str = this.resultdata[index].platform;
      } else {
        str = this.resultdata[index].title;
      }
      if (str !== undefined) {
        str = str.toLowerCase();
        searchstr = searchstr.toLowerCase();
        const x = str.search(searchstr);
        if (x >= 0) {
          this.searchData.push(str);
        }
      }
      if ( this.searchData.length > 5 ) {
        break;
      }
    }
  }

  getSortedValue() {
    // tslint:disable-next-line:prefer-const
    let copyd = this.data;
    let temp = [];
    for (let index = 0; index < copyd.length; index++) {
      for (let index2 = index; index2 < copyd.length; index2++) {
        if (copyd[index].score !== undefined && copyd[index2].score !== undefined ) {
            if ( copyd[index2].score > copyd[index].score ) {
              temp = copyd[index];
              copyd[index] = copyd[index2];
              copyd[index2] = temp;
            }
          }
      }
    }
    this.data = copyd;
  }

  getfiltered(search1, propert) {
    this.data = [];
    this.searchData = [];
    let searchstr = search1;
    let str = '';
    if (searchstr === '') {
      this.data = this.datacopy;
    } else {
      for (let index = 0; index < this.resultdata.length; index++) {
        if ( propert === 'editors_choice') {
           str = this.resultdata[index].editors_choice;
        } else if (propert === 'genre') {
           str = this.resultdata[index].genre;
        } else if (propert === 'score') {
          str = this.resultdata[index].score;
        } else if (propert === 'platform') {
          str = this.resultdata[index].platform;
        } else {
          str = this.resultdata[index].title;
        }
        //  str = this.resultdata[index].title;
        if (str !== undefined) {
          str = str.toLowerCase();
          searchstr = searchstr.toLowerCase();
          const x = str.search(searchstr);
          if (x >= 0) {
            // this.data[index] = result[index];
            this.data.push(this.resultdata[index]);
            if ( this.searchData.length < 10 ) {
                this.searchData.push(str);
              }
          }
        }

      }
    }
  }

  mydataSelect(form1, j) {
    // form1.value.search = this.searchData[j];
    const i = document.getElementById('search');
    i.setAttribute('value', this.searchData[j]);
    console.log(this.searchData[j]);
  }
  submitform(myform) {
    const s = myform.value.search;
    const k = myform.value.opt;
    this.getfiltered(s, k);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    try {
      this.mySubscription.unsubscribe();
    } catch (error) { }
  }
}
