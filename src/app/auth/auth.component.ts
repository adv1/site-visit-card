import { Component } from '@angular/core';

@Component({
  selector: 'auth',
  template: `
    <router-outlet></router-outlet>
      <my-notify notificationEmitter="loginPage"></my-notify>
  `,
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {}
