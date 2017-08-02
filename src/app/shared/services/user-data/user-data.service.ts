'use strict';

import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService {

  private _myStorage = localStorage;

  public set(key: string, data): Promise<void> {
    return Promise.resolve(this._myStorage.setItem('key', data));
  }

  public getKey(key: string): Promise<string> {
    return Promise.resolve(this._myStorage.getItem('key'));
  }

  public clearKey(key?): Promise<void> {
    return Promise
      .resolve(key ? this._myStorage.removeItem('key') : this._myStorage.clear());
  }
}
