'use strict';

import {Component, Input, OnInit} from '@angular/core';
import { NotifyService } from './notifications.service';

@Component({
  selector: 'my-notify',
  templateUrl: './notifications.component.html',
  styleUrls: [ './notifications.component.scss' ]
})
export class NotifyComponent implements OnInit {

  @Input() public for: string;

  public notifications = [];

  public constructor(
    private _notifyService: NotifyService
  ) {}

  public ngOnInit() {
    this.notifications = this._notifyService.getNotifications(this.for);
    // this._notifyService.subscribe(() => this.notifications = this._notifyService.getNotifications(this.for));
  }

  public addNotify() {
    this._notifyService.success(this.for, 'test message');
  }


  public close(id: string): void {
    this._notifyService.clear(id);
  }

  public ngOnDestroy() {
    this._notifyService.unSubscribe();
  }
}


