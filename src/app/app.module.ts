import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatabaseService } from './service/database.service';
import { ApiconnectionService } from './service/apiconnection.service';
import { UserdataService } from './service/userdata.service';
import { ValemitterService } from './service/valemitter.service';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SharedModule } from './shared/shared.module';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    PagenotfoundComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    ChartModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  providers: [
    DatabaseService,
    ApiconnectionService,
    UserdataService,
    ValemitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
