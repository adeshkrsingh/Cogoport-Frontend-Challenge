import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { LineChartDemoComponent } from './line-chart-demo/line-chart-demo.component';

@NgModule({
  imports: [
    CommonModule,
    Module2RoutingModule
  ],
  declarations: [LineChartDemoComponent]
})
export class Module2Module { }
