import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/first';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  showLoader: boolean;


  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Users Distribution'
    },
    series: [{
      name: 'days',
      data: [75, 120, 30, 40, 150, 140, 176, 141, 97]
    }]
  });

  chart2 = new Chart({
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Users Distribution'
    },
    series: [{
      name: 'days',
      data: [75, 120, 30, 40, 150, 140, 176, 141, 97]
    }]
  });

  constructor() { }

  ngOnInit() {
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
    }, 2000);
  }

}
