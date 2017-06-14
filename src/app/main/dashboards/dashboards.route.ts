import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardsComponent } from './dashboards.component';
import { CurrentDashboardsComponent } from './current-dashboards/current-dashboards.component';
import { FutureDashboardsComponent } from './future-dashboards/future-dashboards.component';

const dashboardsRoutes: Routes = [
  { path: 'dashboards', component: DashboardsComponent,
    children: [
      { path: 'current-dashboard', component: CurrentDashboardsComponent },
      { path: 'future-dashboard', component: FutureDashboardsComponent },
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(dashboardsRoutes) ],
  exports: [ RouterModule ]
})
export class DashboardsRoute { }

//     7. Чтобы заработал роуты внутри роутов - вот пример из одного из моих проектов
//         export const authRoutes: Routes = [{
//       children: [
//         {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
//         signInRoutes,
//         signUpRoutes,
//         forgotPasswordRoutes,
//         resetPasswordRoutes
//       ],
//       component: AuthComponent,
//       path: 'auth'
//             }];
//         В такой схеме ты в children указываешь такие же роуты, как ты уже писал,
//       но только для current-dashboards и future-dashboards.
//           И учти, что если у тебя в роуте current-dashboards указана ссылка /current-dashboards,
//       то в приложении ты уже получишь ссылку /auth/current-dashboards, т.к. у children свой постоянный path.
//           Тебе, естественно нужно использовать не auth, а что-то более подходящее, например dashboards
