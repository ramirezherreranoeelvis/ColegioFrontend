import { Component } from '@angular/core';
import List from '../../atoms/select-list/list';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavButtonsComponent } from '../../molecules/nav-buttons/nav-buttons';
import { PerfilComponent } from '../../molecules/perfil/perfil.component';

@Component({
      selector: 'template-workspace',
      imports: [
            CommonModule,
            PerfilComponent,
            RouterOutlet,
            NavButtonsComponent,
      ],
      templateUrl: './template-workspace.html',
})
export class TemplateWorkspace {
      routesMain: List[] = [
            { id: '/workspace/horario', value: 'horario' },
            { id: '/workspace/reportes-incidentes', value: 'incidentes' },
            { id: '/workspace/cursos', value: 'cursos' },
            { id: '/workspace/historial', value: 'historial de ingreso' },
            { id: '/workspace/notas-generales', value: 'Notas Generales' },
      ];
      routesMatricula: List[] = [
            {
                  id: '/workspace/registrar-matricula',
                  value: 'registrar matricula',
            },
            {
                  id: '/workspace/registrar-pago-matricula',
                  value: 'pago matricula',
            },
            {
                  id: '/workspace/registrar-pago-mensual',
                  value: 'pago mensualidad',
            },
      ];
}
