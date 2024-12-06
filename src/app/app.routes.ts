import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { LoginComponent } from './modules/login/components/login/login.component';
import { ProtectedPageComponent } from './modules/protected-page/components/protected-page/protected-page.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'protected',
    component: ProtectedPageComponent,
    canActivate: [authGuard],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];
