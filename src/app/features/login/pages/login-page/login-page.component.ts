import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginForm } from '../../components/login-form/login-form.component';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  submitting = false;
  errors: string[] = [];

  constructor(
    private authService: AuthService,
    private dialogService: MatDialog,
    private router: Router
  ) {}

  onLogIn(form: LoginForm): void {
    console.log('login');
    this.submitting = true;
    this.authService
      .logIn(form)
      .pipe(
        finalize(() => {
          this.submitting = false;
        })
      )
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.errors = [];
            this.router.navigateByUrl('/');
          } else {
            this.errors = response.errors;
          }
        },
        error: () => {
          this.errors = ['Erro ao fazer a requisição, tente novamente'];
        },
      });
  }
}
