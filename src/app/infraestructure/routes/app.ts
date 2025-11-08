import { Routes } from '@angular/router';
import { checkIfIsLoggedOnGuard } from '../../core/guards/check-if-is-logged-on/check-if-is-logged-on';

export const routes: Routes = [
      {
            path: 'login',
            title: 'login',
            loadComponent: () => import('../pages/login'),
            canActivate: [checkIfIsLoggedOnGuard],
      },
      {
            path: '',
            loadComponent: () => import('../pages/workspace/layout'),
            loadChildren: () => import('../pages/workspace/infrastructura/routes'),
      },
      {
            path: 'test',
            title: 'test',
            loadComponent: () => import('../pages/test'),
      },
      {
            path: '**',
            title: 'Pagina no encontrada',
            loadComponent: () => import('../pages/not-found'),
      },
];
