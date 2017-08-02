'use strict';

import { Component, Input, OnInit } from '@angular/core';
import { NotifyService } from './notifications.service';

@Component({
  selector: 'my-notify',
  templateUrl: './notifications.component.html',
  styleUrls: [ './notifications.component.scss' ]
})
export class NgNotifyComponent implements OnInit {

  @Input() public notificationEmitter: string;
  public notifications = [];

  public constructor(
    private _notifyService: NotifyService
  ) {}

  public ngOnInit() {
    this.notifications = this._notifyService.getNotifications('loginPage');
  }


  public close(id: string): void {
    this._notifyService.clear(id);
  }

  public ngOnDestroy() {
    this._notifyService
  }
}


