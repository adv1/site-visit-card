'use strict';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotifyComponent } from './notifications.component';
import { NotifyService } from './notifications.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NotifyComponent
  ],
  exports: [
    NotifyComponent
  ],
  providers: [
    NotifyService
  ]
})
export class NotifyModule {}
