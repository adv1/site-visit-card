import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentDashboardsComponent } from './current-dashboards.component';

const appRoutes: Routes = [
  { path: 'current-dashboard', component: CurrentDashboardsComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class CurrentDashboardsRoute { }
