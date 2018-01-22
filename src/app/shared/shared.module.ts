import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LoaderComponent } from './loader/loader.component';

import { UnabletoloadComponent } from './unabletoload/unabletoload.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  declarations: [LoaderComponent, UnabletoloadComponent],
  exports: [LoaderComponent, UnabletoloadComponent]
})
export class SharedModule { }
