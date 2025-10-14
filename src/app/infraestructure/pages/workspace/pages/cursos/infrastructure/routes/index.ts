import { Routes } from '@angular/router';

export const courses: Routes = [
      {
            path: '',
            title: 'courses',
            loadComponent: () => import('../..'),
      },
      {
            path: 'course/:code',
            title: 'course',
            loadComponent: () => import('../../pages/course'),
      },
      {
            path: 'resource/:code',
            title: 'resource',
            loadComponent: () => import('../../pages/resource'),
      },
];
