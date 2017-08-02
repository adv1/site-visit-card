'use strict';

import { NgModule } from '@angular/core';
import { UserDataService } from './user-data.service';

@NgModule({
  providers: [
    UserDataService
  ]
})
export class UserDataModule {}
