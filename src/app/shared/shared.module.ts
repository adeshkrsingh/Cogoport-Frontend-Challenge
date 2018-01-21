import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LoaderComponent } from './loader/loader.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UnabletoloadComponent } from './unabletoload/unabletoload.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  declarations: [LoaderComponent, PagenotfoundComponent, UnabletoloadComponent],
  exports: [LoaderComponent, PagenotfoundComponent, UnabletoloadComponent]
})
export class SharedModule { }
