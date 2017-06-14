import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.scss']
})
export class SignUpComponent {
  login: string = '';
  password: string = '';
  email: string = '';
  @Output() create: EventEmitter<string> = new EventEmitter();

  onSubmit() {
    this.create.emit(this.login);
    this.create.emit(this.password);
    this.create.emit(this.email);
  }
}
