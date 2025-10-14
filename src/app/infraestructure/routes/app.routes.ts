import { Routes } from '@angular/router';

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
      },
      {
            path: '',
            loadChildren: () =>
                  import('../pages/workspace/infrastructura/routes/workspace.routes').then(
                        (m) => m.workspace,
                  ),
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
