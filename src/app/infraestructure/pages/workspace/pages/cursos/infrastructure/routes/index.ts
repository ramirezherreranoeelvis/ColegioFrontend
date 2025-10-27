import { Routes } from '@angular/router';
import { checkIfIsLogoutGuard } from '../../../../../../guards/check-if-is-logout.guard';

export const courses: Routes = [
      {
            path: '',
            title: 'courses',
            loadComponent: () => import('../..'),
            canActivate: [checkIfIsLogoutGuard],
      },
      {
            path: 'course/:code',
            title: 'course',
            loadComponent: () => import('../../pages/course'),
            canActivate: [checkIfIsLogoutGuard],
      },
      {
            path: 'resource/:code',
            title: 'resource',
            loadComponent: () => import('../../pages/resource'),
            canActivate: [checkIfIsLogoutGuard],
      },
];
