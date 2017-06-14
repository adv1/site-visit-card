import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.scss']
})
export class SignInComponent {
  login: string = '';
  password: string = '';
  @Output() create: EventEmitter<string> = new EventEmitter();

  onSubmit() {
    this.create.emit(this.login);
    this.create.emit(this.password);
  }
}
