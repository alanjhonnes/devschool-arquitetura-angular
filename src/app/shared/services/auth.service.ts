import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { User } from '../types/user.type';
import { LogInResponse } from './auth.types';
import { UserService } from './user.service';

export interface LogInInput {
  email: string;
  password: string;
}

export const accounts: Record<string, User> = {
  'alan.sa@mjv.com.br': {
    email: 'alan.sa@mjv.com.br',
    name: 'Alan Jhonnes',
    dashboardSetting: ['progress', 'progress', 'table'],
  },
  'nathan.carlos@mjv.com.br': {
    email: 'nathan.carlos@mjv.com.br',
    name: 'Nathan Carlos',
    dashboardSetting: ['table', 'table', 'progress'],
  },
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userService: UserService) {}

  logIn(login: LogInInput): Observable<LogInResponse> {
    const user = accounts[login.email];
    const response: LogInResponse = user
      ? {
          success: true,
          data: user,
        }
      : {
          success: false,
          errors: ['Usuário não encontrado.'],
        };
    return of(response).pipe(
      delay(2000),
      tap((response) => {
        // if log in is successful, sets current user
        if (response.success) {
          this.userService.setCurrentUser(response.data);
        }
      })
    );
  }

  logOut() {
    this.userService.setCurrentUser(null);
  }
}
