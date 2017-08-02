'use strict';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserCredentials } from '../auth.model';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

  public signUpData: UserCredentials =  { email: '', password: ''};

  public constructor(
    private _route: ActivatedRoute) { }

  public ngOnInit(): string {
    return this.signUpData.email = this._route.snapshot.parent.queryParamMap.get('email');
  }
};
