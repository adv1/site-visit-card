'use strict';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserDataModule } from '../shared/services/user-data/user-data.module';
import { RouterModule } from '@angular/router';
import { MdButtonModule, MdIconModule, MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifyModule } from '../shared/services/notifications/notifications.module';

import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { authRoutes } from './auth.route';


@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    FormsModule,
    UserDataModule,
    NotifyModule,
    RouterModule.forRoot(authRoutes),
  ],
})
export class AuthModule {}
