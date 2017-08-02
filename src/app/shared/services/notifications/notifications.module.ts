'use strict';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgNotifyComponent } from './notifications.component';
import { NotifyService } from './notifications.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgNotifyComponent
  ],
  exports: [
    NgNotifyComponent
  ],
  providers: [
    NotifyService
  ]
})
export class NotifyModule {}
