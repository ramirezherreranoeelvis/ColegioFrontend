import { Routes } from '@angular/router';
import { CursosComponent } from '../../components/pages/workspace/home/cursos/cursos.component';
import { HistorialComponent } from '../../components/pages/workspace/home/historial/historial.component';
import { HorarioComponent } from '../../components/pages/workspace/home/horario/horario.component';
import { NotasGeneralesComponent } from '../../components/pages/workspace/home/notas-generales/notas-generales.component';
import { ReportesIncidentesComponent } from '../../components/pages/workspace/home/reportes-incidentes/reportes-incidentes.component';
import { RegistrarMatriculaComponent } from '../../components/pages/workspace/matricula/registrar-matricula/registrar-matricula.component';
import { RegistrarPagoMatriculaComponent } from '../../components/pages/workspace/matricula/registrar-pago-matricula/registrar-pago-matricula.component';
import { RegistrarPagoMensualComponent } from '../../components/pages/workspace/matricula/registrar-pago-mensual/registrar-pago-mensual.component';

export const workspace: Routes = [
      {
            path: '',
            redirectTo: 'horario',
            pathMatch: 'full',
      },
      {
            path: 'cursos',
            title: 'cursos',
            component: CursosComponent,
      },
      {
            path: 'historial',
            title: 'historial',
            component: HistorialComponent,
      },
      {
            path: 'horario',
            title: 'horario',
            component: HorarioComponent,
      },
      {
            path: 'notas-generales',
            title: 'notas generales',
            component: NotasGeneralesComponent,
      },
      {
            path: 'reportes-incidentes',
            title: 'reportes incidentes',
            component: ReportesIncidentesComponent,
      },
      {
            path: 'registrar-matricula',
            title: 'registrar-matricula',
            component: RegistrarMatriculaComponent,
      },
      {
            path: 'registrar-pago-matricula',
            title: 'registrar-pago-matricula',
            component: RegistrarPagoMatriculaComponent,
      },
      {
            path: 'registrar-pago-mensual',
            title: 'registrar-pago-mensual',
            component: RegistrarPagoMensualComponent,
      },
];
