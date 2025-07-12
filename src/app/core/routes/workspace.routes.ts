import { Routes } from '@angular/router';

export const workspace: Routes = [
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
                        `../../components/pages/workspace/sub-pages/cursos/page-cursos`
                  ),
      },
      {
            path: 'historial',
            title: 'historial',
            loadComponent: () =>
                  import(
                        `../../components/pages/workspace/sub-pages/historial/page-historial`
                  ),
      },
      {
            path: 'horario',
            title: 'horario',
            loadComponent: () =>
                  import(
                        `../../components/pages/workspace/sub-pages/horario/page-horario`
                  ),
      },
      {
            path: 'notas-generales',
            title: 'notas generales',
            loadComponent: () =>
                  import(
                        `../../components/pages/workspace/sub-pages/notas-generales/page-notas-generales`
                  ),
      },
      {
            path: 'reportes-incidentes',
            title: 'reportes incidentes',
            loadComponent: () =>
                  import(
                        `../../components/pages/workspace/sub-pages/reportes-incidentes/page-reportes-incidentes`
                  ),
      },
      {
            path: 'registrar-matricula',
            title: 'registrar-matricula',
            loadComponent: () =>
                  import(
                        `../../components/pages/workspace/sub-pages/registrar-matricula/page-registrar-matricula`
                  ),
      },
      {
            path: 'registrar-pago-matricula',
            title: 'registrar-pago-matricula',
            loadComponent: () =>
                  import(
                        `../../components/pages/workspace/sub-pages/registrar-pago-matricula/page-registrar-pago-matricula`
                  ),
      },
      {
            path: 'registrar-pago-mensual',
            title: 'registrar-pago-mensual',
            loadComponent: () =>
                  import(
                        `../../components/pages/workspace/sub-pages/registrar-pago-mensual/pageregistrar-pago-mensual`
                  ),
      },
];
