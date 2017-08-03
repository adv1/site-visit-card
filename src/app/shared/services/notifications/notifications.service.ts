'use strict';

import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { Notification, Notifications } from './notifications.model';

@Injectable()
export class NotifyService {
   @Output() private _notificationEmitter: EventEmitter<string> = new EventEmitter();

  private _notifyes: Notifications = {
      loginPage: [
        { type: 'success', message: 'Success' },
        { type: 'warning', message: 'Warning' },
        { type: 'fail', message: 'Fail' },
        ]
  };

  public subscribe(): void {
    this._notificationEmitter.subscribe()
  }

  public getNotifications(id: string): Array<Notification> {
    return this._notifyes[id];
  }

  public success(id: string, message: string): void {
    this._notifyes[id].push({type: id, message: message});
    this._notificationEmitter.emit('notifications updated');
    this.subscribe();
  }

  public warning(id: string, message: string): void {
    this._notifyes[id].push({type: id, message: message});
    this._notificationEmitter.emit('notifications updated');
  }

  public fail(id: string, message: string): void {
    this._notifyes[id].push({type: id, message: message});
    this._notificationEmitter.emit('notifications updated');
  }

  public clear(id: string): void {
    this._notifyes[id] = null;
    this._notificationEmitter.emit('notifications updated');
  }
}

