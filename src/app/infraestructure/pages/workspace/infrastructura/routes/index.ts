import { Routes } from '@angular/router';
import { checkIfIsLogoutGuard } from '../../../../../core/guards/check-if-is-logout/check-if-is-logout';

const workspace: Routes = [
      {
            path: 'cursos',
            title: 'cursos',
            loadComponent: () => import(`../../pages/cursos/layout`),
            loadChildren: () => import('../../pages/cursos/infrastructure/routes'),
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
      {
            path: '',
            redirectTo: 'horario',
            pathMatch: 'full',
      },
];
export default workspace;
