import { Routes } from '@angular/router';
import { LoginComponent } from '../../components/pages/login/login.component';
import { WorkspaceComponent } from '../../components/pages/workspace/workspace.component';
import { workspace } from './workspace.routes';

export const routes: Routes = [
      {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full',
      },
      {
            path: 'login',
            title: 'login',
            component: LoginComponent,
      },
      {
            path: 'workspace',
            title: 'workspace',
            component: WorkspaceComponent,
            children: workspace,
      },
];
