'use strict';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../shared/services/user-data/user-data.service';
import { UserCredentials } from '../auth.model';


@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})

export class SignInComponent implements OnInit {

  public signInData: UserCredentials = { email: '', password: '' };

  public constructor(
    private _service: UserDataService,
    private _router: Router
  ) {}


  public ngOnInit(): Promise<string> {
    return this._service.getKey('email')
      .then((email: string) => this.signInData.email = email);
  }

  public signIn(): Promise<boolean> {
    if (this.signInData.password) {
      return this._service.set('email', this.signInData.email)
         .then(() => this._router.navigate(['/dashboards']));
    };
  }

  public signUp(): Promise<boolean> {
    return this._router.navigate(['/sign-up'], { queryParams: { email: this.signInData.email } });
  }
};








