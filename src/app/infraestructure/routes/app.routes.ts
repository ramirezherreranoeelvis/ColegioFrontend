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
            loadComponent: () => import('../pages/login/page-login'),
      },
      {
            path: '',
            loadChildren: () =>
                  import('../pages/workspace/infrastructura/routes/workspace.routes').then(
                        (m) => m.workspace
                  ),
      },
      {
            path: '**',
            title: 'Pagina no encontrada',
            loadComponent: () => import('../pages/not-found/page-not-found'),
      },
];
