import { Routes } from '@angular/router';
import { checkIfIsLogoutGuard } from '../../../../../core/guards/check-if-is-logout.guard';

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
                        canActivate: [checkIfIsLogoutGuard],
                  },
                  {
                        path: 'horario',
                        title: 'horario',
                        loadComponent: () => import(`../../pages/horario`),
                        canActivate: [checkIfIsLogoutGuard],
                  },
                  {
                        path: 'notas-generales',
                        title: 'notas generales',
                        loadComponent: () => import(`../../pages/notas-generales`),
                        canActivate: [checkIfIsLogoutGuard],
                  },
                  {
                        path: 'reportes',
                        title: 'reportes incidentes',
                        loadComponent: () => import(`../../pages/reportes`),
                        canActivate: [checkIfIsLogoutGuard],
                  },
                  {
                        path: 'registrar-matricula',
                        title: 'registrar-matricula',
                        loadComponent: () => import(`../../pages/registrar-matricula`),
                        canActivate: [checkIfIsLogoutGuard],
                  },
                  {
                        path: 'pago-matricula',
                        title: 'registrar-pago-matricula',
                        loadComponent: () => import(`../../pages/pago-matricula`),
                        canActivate: [checkIfIsLogoutGuard],
                  },
                  {
                        path: 'pago-mensual',
                        title: 'registrar-pago-mensual',
                        loadComponent: () => import(`../../pages/pago-mensual`),
                        canActivate: [checkIfIsLogoutGuard],
                  },
            ],
      },
];
