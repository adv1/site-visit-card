'use strict';

export interface Notification {
  type: string;
  message: string;
}

export interface Notifications {
  [id: string]: Array<Notification>;
}
