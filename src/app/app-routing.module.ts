import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/guard/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/layout/layout.module').then((m) => m.LayoutModule),
      },
    ],
  },
  {
    path: '**',
    loadChildren: () =>
      import('./features/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
