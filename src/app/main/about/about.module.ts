'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';


const aboutRoute: Routes = [
  { path: '', component: AboutComponent }
];

@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    RouterModule.forChild(aboutRoute),
  ],
})
export class AboutModule {}
