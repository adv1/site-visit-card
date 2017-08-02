'use strict';

import { Routes } from '@angular/router';
import { DashboardsComponent } from './dashboards.component';
import { currentDashboardRoute } from './current-dashboards/current-dashboards.route';
import { futureDashboardRoute } from './future-dashboards/future-dashboards.route';

export const dashboardsRoutes: Routes = [
  { path: 'dashboards', component: DashboardsComponent,
    children: [
      currentDashboardRoute,
      futureDashboardRoute
    ]
  }
]
