'use strict';

import { EventEmitter, Injectable, Output } from '@angular/core';
import { Notification, Notifications } from './notifications.model';

@Injectable()
export class NotifyService {
   @Output() private _notificationEmitter: EventEmitter<string> = new EventEmitter();

  private _notifyes: Notifications = {
      signIn: [
        { type: 'success', message: 'Success signIn' },
        { type: 'warning', message: 'Warning signIn' },
        { type: 'fail', message: 'Fail signIn' },
      ],
      signUp: [
        { type: 'success', message: 'Success signUp' },
        { type: 'warning', message: 'Warning signUp' },
        { type: 'fail', message: 'Fail signUp' },
      ]
  };

  public subscribe(callback) {
    return this._notificationEmitter.subscribe(callback);
  }

  public getNotifications(id: string): Array<Notification> {
    return this._notifyes[id];
  }

  public success(id: string, message: string): void {
    this._notifyes[id].push({type: id, message: message});
    this._notificationEmitter.emit('notifications updated')
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
    delete this._notifyes[id];
    this._notificationEmitter.emit('notifications updated');
  }
}

