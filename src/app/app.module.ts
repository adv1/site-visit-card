'use strict';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AuthModule,
    MainModule,
  ],
  providers: [ ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
