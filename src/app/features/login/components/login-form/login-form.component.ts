import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface LoginForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  @Input() submitting = false;

  @Input() errors: string[] = [];

  @Output() logIn = new EventEmitter<LoginForm>();

  onLogIn(): void {
    if (this.form.valid) {
      this.logIn.emit(this.form.value);
    }
  }
}
