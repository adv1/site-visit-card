import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in.component';

const signInRoutes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(signInRoutes) ],
  exports: [ RouterModule ]
})
export class SignInRoute { }
