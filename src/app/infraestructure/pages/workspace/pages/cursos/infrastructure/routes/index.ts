import { checkIfIsLogoutGuard } from '../../../../../../../core/guards/check-if-is-logout/check-if-is-logout';

export default [
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
