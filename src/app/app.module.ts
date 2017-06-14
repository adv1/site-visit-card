import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { DashboardsComponent } from './main/dashboards/dashboards.component';
import { Routes } from '@angular/router';
import { SignInRoute } from './auth/sign-in/sign-in.route';
import { SignUpRoute } from './auth/sign-up/sign-up.route';
import { DashboardsRoute } from './main/dashboards/dashboards.route';
import { CurrentDashboardsComponent } from './main/dashboards/current-dashboards/current-dashboards.component';
import { FutureDashboardsComponent } from './main/dashboards/future-dashboards/future-dashboards.component';

const appRoutes: Routes = [
  SignInRoute,
  SignUpRoute,
  DashboardsRoute,
];


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardsComponent,
    CurrentDashboardsComponent,
    FutureDashboardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
