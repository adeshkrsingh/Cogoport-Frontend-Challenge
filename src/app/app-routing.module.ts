import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [

  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'user',
    loadChildren: './module1/module1.module#Module1Module',
  },
  {
    path: 'game',
    loadChildren: './game/game.module#GameModule',
  },
  {
    path: 'p1',
    loadChildren: './shared/shared.module#SharedModule',
  },
  // {
  //   path: 'm2',
  //   component: AppComponent,
  // },
  // {
  //   path: '**',  // it will generate courses avaliable
  //   component: LinkNotFoundComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
