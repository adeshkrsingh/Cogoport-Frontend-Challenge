import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UnabletoloadComponent } from './unabletoload/unabletoload.component';

const routes: Routes = [
  {
    path: 'l1',
    component: LoaderComponent,
  },
  {
    path: 'p1',
    component: PagenotfoundComponent,
  },
  {
    path: 'u1',
    component: UnabletoloadComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
exports: [RouterModule]
})
export class SharedRoutingModule { }
