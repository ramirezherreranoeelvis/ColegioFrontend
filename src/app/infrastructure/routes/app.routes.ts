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
            loadComponent: () =>
                  import('../../components/pages/login/page-login'),
      },
      {
            path: 'workspace',
            title: 'workspace',
            loadComponent: () =>
                  import('../../components/pages/workspace/page-workspace'),
            loadChildren: () =>
                  import(
                        '../../components/pages/workspace/infrastructura/routes/workspace.routes'
                  ).then((m) => m.workspace),
      },
];