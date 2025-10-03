import { Routes } from '@angular/router';

export const courses: Routes = [
      {
            path: '',
            title: 'courses',
            loadComponent: () => import('../../page-cursos'),
      },
      {
            path: 'course/:code',
            title: 'course',
            loadComponent: () => import('../../sub-pages/page-course'),
      },
      {
            path: 'resource/:code',
            title: 'resource',
            loadComponent: () => import('../../sub-pages/page-resource'),
      },
];
