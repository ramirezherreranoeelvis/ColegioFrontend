import { Routes } from '@angular/router';

export const workspace: Routes = [
      {
            path: '',
            loadComponent: () => import('../../layout'),
            children: [
                  {
                        path: '',
                        redirectTo: 'horario',
                        pathMatch: 'full',
                  },
                  {
                        path: 'cursos',
                        title: 'cursos',
                        loadComponent: () => import(`../../pages/cursos/layout`),
                        loadChildren: () =>
                              import('../../pages/cursos/infrastructure/routes').then(
                                    (m) => m.courses,
                              ),
                  },
                  {
                        path: 'historial',
                        title: 'historial',
                        loadComponent: () => import(`../../pages/historial`),
                  },
                  {
                        path: 'horario',
                        title: 'horario',
                        loadComponent: () => import(`../../pages/horario`),
                  },
                  {
                        path: 'notas-generales',
                        title: 'notas generales',
                        loadComponent: () => import(`../../pages/notas-generales`),
                  },
                  {
                        path: 'reportes-incidentes',
                        title: 'reportes incidentes',
                        loadComponent: () => import(`../../pages/reportes`),
                  },
                  {
                        path: 'registrar-matricula',
                        title: 'registrar-matricula',
                        loadComponent: () => import(`../../pages/registrar-matricula`),
                  },
                  {
                        path: 'pago-matricula',
                        title: 'registrar-pago-matricula',
                        loadComponent: () => import(`../../pages/pago-matricula`),
                  },
                  {
                        path: 'pago-mensual',
                        title: 'registrar-pago-mensual',
                        loadComponent: () => import(`../../pages/pago-mensual`),
                  },
            ],
      },
];
