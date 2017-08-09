'use strict';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserCredentials } from '../auth.model';
import { NotifyService } from '../../shared/services/notifications/notifications.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

  public signUpData: UserCredentials =  { email: '', password: ''};

  public constructor(
    private _notifyService: NotifyService,
    private _route: ActivatedRoute
  ) { }

  public ngOnInit(): string {
    return this.signUpData.email = this._route.snapshot.parent.queryParamMap.get('email');
  }

  public addNotify(): void {
    this._notifyService.success('signUp', 'test message');
  }
};
