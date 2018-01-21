import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartDemoComponent } from './line-chart-demo/line-chart-demo.component';

const routes: Routes = [
  {
    path: '',
    component: LineChartDemoComponent,
  },
  {
    path: '1',
    component: LineChartDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
