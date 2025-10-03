import { Routes } from '@angular/router';

export const workspace: Routes = [
      {
            path: '',
            loadComponent: () => import('../../page-workspace-layout'),
            children: [
                  {
                        path: '',
                        redirectTo: 'horario',
                        pathMatch: 'full',
                  },
                  {
                        path: 'cursos',
                        title: 'cursos',
                        loadComponent: () =>
                              import(
                                    `../../sub-pages/cursos/page-courses-layout`
                              ),
                        loadChildren: () =>
                              import(
                                    '../../sub-pages/cursos/infrastructure/routes/courses.routes'
                              ).then((m) => m.courses),
                  },
                  {
                        path: 'historial',
                        title: 'historial',
                        loadComponent: () =>
                              import(
                                    `../../sub-pages/historial/page-historial`
                              ),
                  },
                  {
                        path: 'horario',
                        title: 'horario',
                        loadComponent: () =>
                              import(`../../sub-pages/horario/page-horario`),
                  },
                  {
                        path: 'notas-generales',
                        title: 'notas generales',
                        loadComponent: () =>
                              import(
                                    `../../sub-pages/notas-generales/page-notas-generales`
                              ),
                  },
                  {
                        path: 'reportes-incidentes',
                        title: 'reportes incidentes',
                        loadComponent: () =>
                              import(
                                    `../../sub-pages/reportes-incidentes/page-reportes-incidentes`
                              ),
                  },
                  {
                        path: 'registrar-matricula',
                        title: 'registrar-matricula',
                        loadComponent: () =>
                              import(
                                    `../../sub-pages/registrar-matricula/page-registrar-matricula`
                              ),
                  },
                  {
                        path: 'registrar-pago-matricula',
                        title: 'registrar-pago-matricula',
                        loadComponent: () =>
                              import(
                                    `../../sub-pages/registrar-pago-matricula/page-registrar-pago-matricula`
                              ),
                  },
                  {
                        path: 'registrar-pago-mensual',
                        title: 'registrar-pago-mensual',
                        loadComponent: () =>
                              import(
                                    `../../sub-pages/registrar-pago-mensual/pageregistrar-pago-mensual`
                              ),
                  },
            ],
      },
];
