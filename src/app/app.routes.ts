import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./user-dashboard/user-dashboard.component')
  },
  {
    path: 'employees',
    loadComponent: () =>
      import('./employee-browser/employee-browser.component')
  }
];
