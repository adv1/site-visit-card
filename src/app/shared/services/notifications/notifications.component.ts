'use strict';

import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { NotifyService } from './notifications.service';

@Component({
  selector: 'my-notify',
  templateUrl: './notifications.component.html',
  styleUrls: [ './notifications.component.scss' ]
})
export class NotifyComponent implements OnInit, OnDestroy {

  @Input() public for: string;

  public notifications = [];
  public subscriber;

  public constructor(
    private _notifyService: NotifyService
  ) {}

  public ngOnInit(): void {
    this.notifications = this._notifyService.getNotifications(this.for);
    this.subscriber = this._notifyService.subscribe(() => this.notifications = this._notifyService.getNotifications(this.for));
  }

  public close(): void {
    this._notifyService.clear(this.for);
  }

  public ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}


