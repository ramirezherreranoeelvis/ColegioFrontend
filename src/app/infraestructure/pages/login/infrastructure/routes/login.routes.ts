import { Route } from '@angular/router';

export const login: Route = {
      path: 'login',
      redirectTo: 'login',
      loadComponent: () => import('../../page-login'),
};
