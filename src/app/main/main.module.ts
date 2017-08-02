'use strict';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutModule } from './about/about.module';

import { dashboardsRoutes } from './dashboards/dashboards.route';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { CurrentDashboardsComponent } from './dashboards/current-dashboards/current-dashboards.component';
import { FutureDashboardsComponent } from './dashboards/future-dashboards/future-dashboards.component';


const mainRoutes: Routes = [
  ...dashboardsRoutes,
  {
    path: 'about',
    loadChildren: 'app/main/about/about.module#AboutModule'
  }
];

@NgModule({
  declarations: [
    DashboardsComponent,
    CurrentDashboardsComponent,
    FutureDashboardsComponent,
  ],
  imports: [
    CommonModule,
    AboutModule,
    RouterModule.forRoot(mainRoutes),
  ],
})
export class MainModule {}
