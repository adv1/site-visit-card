'use strict';

import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { signInRoute } from './sign-in/sign-in.route';
import { signUpRoute } from './sign-up/sign-up.route';

export const authRoutes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: '', component: AuthComponent,
    children: [
      signInRoute,
      signUpRoute
    ]
  }
];
