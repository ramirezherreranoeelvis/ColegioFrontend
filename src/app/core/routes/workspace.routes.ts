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
                        `../../components/pages/workspace/sub-pages/cursos/cursos.component`
                  ),
      },
      {
            path: 'historial',
            title: 'historial',
            loadComponent: () =>
                  import(
                        `../../components/pages/workspace/sub-pages/historial/historial.component`
                  ),
      },
      {
            path: 'horario',
            title: 'horario',
            loadComponent: () =>
                  import(
                        `../../components/pages/workspace/sub-pages/horario/horario.component`
                  ),
      },
      {
            path: 'notas-generales',
            title: 'notas generales',
            loadComponent: () =>
                  import(
                        `../../components/pages/workspace/sub-pages/notas-generales/notas-generales.component`
                  ),
      },
      {
            path: 'reportes-incidentes',
            title: 'reportes incidentes',
            loadComponent: () =>
                  import(
                        `../../components/pages/workspace/sub-pages/reportes-incidentes/reportes-incidentes.component`
                  ),
      },
      {
            path: 'registrar-matricula',
            title: 'registrar-matricula',
            loadComponent: () =>
                  import(
                        `../../components/pages/workspace/sub-pages/registrar-matricula/registrar-matricula.component`
                  ),
      },
      {
            path: 'registrar-pago-matricula',
            title: 'registrar-pago-matricula',
            loadComponent: () =>
                  import(
                        `../../components/pages/workspace/sub-pages/registrar-pago-matricula/registrar-pago-matricula.component`
                  ),
      },
      {
            path: 'registrar-pago-mensual',
            title: 'registrar-pago-mensual',
            loadComponent: () =>
                  import(
                        `../../components/pages/workspace/sub-pages/registrar-pago-mensual/registrar-pago-mensual.component`
                  ),
      },
];
