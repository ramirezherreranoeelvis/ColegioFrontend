import { Routes } from '@angular/router';
import { checkIfIsLoggedOnGuard } from '../guards/check-if-is-logged-on.guard';

export const routes: Routes = [
      {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full',
      },
      {
            path: 'login',
            title: 'login',
            loadComponent: () => import('../pages/login'),
            canActivate: [checkIfIsLoggedOnGuard],
      },
      {
            path: '',
            loadChildren: () =>
                  import('../pages/workspace/infrastructura/routes').then((m) => m.workspace),
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
