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
            loadComponent: () => import('../../components/pages/login/page-login'),
      },
      {
            path: 'workspace',
            title: 'workspace',
            loadComponent: () =>
                  import(
                        '../../components/pages/workspace/page-workspace'
                  ),
            loadChildren: () =>
                  import('./workspace.routes').then((m) => m.workspace),
      },
];
