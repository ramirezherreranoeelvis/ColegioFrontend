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
            loadComponent: () => import('../../components/pages/login/login'),
      },
      {
            path: 'workspace',
            title: 'workspace',
            loadComponent: () =>
                  import(
                        '../../components/pages/workspace/workspace.component'
                  ),
            loadChildren: () =>
                  import('./workspace.routes').then((m) => m.workspace),
      },
];
